/**
 * documentation generation script
 */
const fs = require("fs");
const {exec} = require("child_process");


function generateDoc() {
    const ruby_nice_doc_file = './doc/ruby-nice.jsdoc.md';
    exec(`./node_modules/jsdoc-to-markdown/bin/cli.js --files ./src/ruby-nice/ruby-nice.js > ${ruby_nice_doc_file}`, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
        }
        beautifyDoc(ruby_nice_doc_file);
        const ruby_nice_string_doc_file = './doc/ruby-nice-string.jsdoc.md';
        exec(`./node_modules/jsdoc-to-markdown/bin/cli.js --files ./src/ruby-nice/string.js > ${ruby_nice_string_doc_file}`, (error, stdout, stderr) => {
            beautifyDoc(ruby_nice_string_doc_file);
        });
    });
}

function beautifyDoc(file) {
    const kind_line_regex = /^[\n\r]\*\*Kind[^\n\r]*[\n\r]/gms;
    const arrow_right_char_regex = /⇒/g;
    const function_description_regex = /## Classes.*<a name="String"><\/a>/gms;
    const functions_regex = /<a name="downcase"><\/a>.*/gms;
    let data = fs.readFileSync(file, 'utf-8').toString();
    data = data.replace(kind_line_regex,'');
    data = data.replace(arrow_right_char_regex,'&rarr;');
    data = data.replace(function_description_regex,'<a name="String"></a>');
    data = data.replace(functions_regex,'');
    fs.writeFileSync(file, data, 'utf-8');
}

console.log("Generate documentation ...");
generateDoc();

