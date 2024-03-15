/**
 * documentation generation script
 */
const fs = require("fs");
const {exec} = require("child_process");
const {execSync} = require("child_process");

const LuckyCase = require("lucky-case/string");
const Glob = require("glob");

const Os = require("os");

require('./../src/ruby-nice/array');

if(Os.type().toLowerCase().includes("windows") || Os.release().toLowerCase().includes("microsoft") || Os.release().toLowerCase().includes("wsl")) {
    const message = `This doc generator can not be run on windows or windows subsystem for linux (wsl), but on linux. Skipping ...`;
    throw new Error(message);
}

const files_to_doc = Glob.sync('./src/ruby-nice/**/*.js').filter(file => !file.endsWith('ruby-nice.js'));

function generateDoc() {
    for(let source_file of files_to_doc) {
        let doc_file = './doc/' + source_file.split('/').getLast().replace(/\.js$/gm,'.jsdoc.md');
        if(doc_file.endsWith('ruby-nice-class.jsdoc.md')) {
            doc_file = doc_file.replace("ruby-nice-class.jsdoc.md","ruby-nice.jsdoc.md");
        }
        execSync(`node ./node_modules/jsdoc-to-markdown/bin/cli.js --files ${source_file} > ${doc_file}`);
        beautifyDoc(doc_file);
    }
}

function beautifyDoc(file) {
    const kind_line_regex = /^[\n\r]\*\*Kind[^\n\r]*[\n\r]/gms;
    const arrow_right_char_regex = /⇒/g;
    const class_name = file.split('/').getLast().split('.').getFirst().toPascalCase();
    const function_description_regex = new RegExp(`## Classes.*<a name="${class_name}"><\/a>`, 'gms');
    let data = fs.readFileSync(file, 'utf-8').toString();
    const first_method_name_match = data.match((new RegExp(`<a name="${class_name}\\+([^"]+)"><\/a>`,'')));
    const first_method_name = first_method_name_match && first_method_name_match[1] ? first_method_name_match[1] : null;
    data = data.replace(kind_line_regex,'');
    data = data.replace(/^\*\*Example\*\*\s*$/gm,"\n**Example**");
    data = data.replace(/^\*\*Returns\*\*/gm,"\n**Returns**");
    data = data.replace(arrow_right_char_regex,'&rarr;');
    data = data.replace(function_description_regex,'<a name="String"></a>');
    if(file.endsWith("ruby-nice.jsdoc.md")) {
        data = data.replace(/RubyNiceClass/g,'RubyNice');
    }
    if(first_method_name) {
        const functions_regex = new RegExp(`<a name="${first_method_name}"><\/a>.*`,'gms');
        data = data.replace(functions_regex,'');
    }
    fs.writeFileSync(file, data, 'utf-8');
}

console.log("Generate documentation ...");
generateDoc();

