/**
 * release build script
 */
const fs = require("fs");
const util = require('util');
const exec = require("child_process").exec;
const exec_prom = util.promisify(exec);
const chalk = require('chalk');

const build_destination_dir = './dist/';

const build_exclusion_markers = [
    /\/\/<!-- MODULE -->\/\/(.*?)\/\/<!-- \/MODULE -->\/\//gs,
    /\/\/<!-- DOC -->\/\/(.*?)\/\/<!-- \/DOC -->\/\//gs,
]

const version_regex = /"version":\s*"([^"]*)"/sgm;

const release_header_template = `/**
 * ruby-nice
 *
 * The nice javascript library to rubynize your javascript to be a happy programmer again.
 *
 * @version {{version}}
 * @date {{date}}
 * @link https://github.com/magynhard/ruby-nice
 * @author Matthäus J. N. Beyrle
 * @copyright Matthäus J. N. Beyrle
 */
`;

const builds = {
    default: {
        destination_file: build_destination_dir + 'ruby-nice.js',
        destination_min_file: build_destination_dir + 'ruby-nice.min.js',
        source_files: [
            './src/ruby-nice/array.js',
            './src/ruby-nice/file.js',
            './src/ruby-nice/number.js',
            './src/ruby-nice/object.js',
            './src/ruby-nice/string.js',
            './src/ruby-nice/ruby-nice.js',
    ]},
    bundle: {
        destination_file: build_destination_dir + 'ruby-nice.bundle.js',
        destination_min_file: build_destination_dir + 'ruby-nice.bundle.min.js',
        source_files: [
            './src/ruby-nice/array.js',
            './src/ruby-nice/file.js',
            './src/ruby-nice/number.js',
            './src/ruby-nice/object.js',
            './src/ruby-nice/string.js',
            './src/ruby-nice/ruby-nice.js',
            './node_modules/typifier/dist/typifier.js',
    ]}
}

function version() {
    const package_json = fs.readFileSync('./package.json','utf8');
    version_regex.lastIndex = 0;
    return version_regex.exec(package_json)[1];
}

function releaseTemplate() {
    return release_header_template.replace('{{version}}', version()).replace('{{date}}',(new Date).toISOString());
}

function prependToFile(file, string) {
    const org_file = fs.readFileSync(file,'utf8');
    fs.writeFileSync(file, string + org_file);
}

function updateJsRubyNiceVersion() {
    let split_version = version().split('.');
    split_version[split_version.length-1] = parseInt(split_version[split_version.length-1])+1;
    const new_version = split_version.join('.');
    // package.json
    let package_json = fs.readFileSync('./package.json','utf8');
    package_json = package_json.replace(version_regex, `"version": "${new_version}"`);
    fs.writeFileSync('./package.json', package_json, 'utf8');
    // RubyNice class
    let ruby_nice_js = fs.readFileSync('./src/ruby-nice/ruby-nice.js','utf8');
    ruby_nice_js = ruby_nice_js.replace(/RubyNice\._version\s*=\s*"[^"]+";/gm, `RubyNice._version = "${new_version}";`)
    fs.writeFileSync('./src/ruby-nice/ruby-nice.js', ruby_nice_js, 'utf8');
    return new_version;
}

console.log(chalk.yellow('##############################'));
console.log(chalk.yellow('# RubyNice build script'));
console.log(chalk.yellow('##############################'));
console.log(`Updating version from ${version()} ...`);
console.log(`... to version ${updateJsRubyNiceVersion()}`);
console.log();
console.log('Building JS ...');
for(let build_key of Object.keys(builds)) {
    const build = builds[build_key];
    console.log(` ${chalk.yellow('-')} ${build_key} ...`);
    if (fs.existsSync(build.destination_file)) {
        fs.unlinkSync(build.destination_file);
    }
    console.log(`${chalk.yellow('    - transpile and minify')} ...`);
    (function buildRawDestinationFile() {
        let final_file = "";
        build.source_files.forEach((source_file) => {
           final_file += fs.readFileSync(source_file, 'utf8') + "\n";
        });
        build_exclusion_markers.forEach((regex) => {
           final_file = final_file.replace(regex,'');
        });
        fs.writeFileSync(build.destination_file, releaseTemplate() + final_file);
    })();
    (async function createMinifiedBuilds() {
        const babel_command = `babel ${build.destination_file} --no-comments --out-file ${build.destination_min_file}`;
        const uglify_command = `uglifyjs ${build.destination_min_file} -m -c -o ${build.destination_min_file}`;
        await exec_prom(babel_command + ' && ' + uglify_command).then(() => {
            prependToFile(build.destination_min_file, releaseTemplate());
        });
    })();
}

console.log(chalk.green('All done!'));
