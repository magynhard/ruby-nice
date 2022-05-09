/**
 * documentation generation script
 */
const fs = require("fs");
const {exec} = require("child_process");
const {execSync} = require("child_process");

const LuckyCase = require("lucky-case/string");

require('./../src/ruby-nice/array');

const files_to_doc = [
    './src/ruby-nice/ruby-nice.js',
    './src/ruby-nice/array.js',
    './src/ruby-nice/env.js',
    './src/ruby-nice/string.js',
    './src/ruby-nice/file.js',
]

function generateDoc() {
    for(let source_file of files_to_doc) {
        const doc_file = './doc/' + source_file.split('/').getLast().replace(/\.js$/gm,'.jsdoc.md');
        execSync(`./node_modules/jsdoc-to-markdown/bin/cli.js --files ${source_file} > ${doc_file}`);
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
    if(first_method_name) {
        const functions_regex = new RegExp(`<a name="${first_method_name}"><\/a>.*`,'gms');
        data = data.replace(functions_regex,'');
    }
    fs.writeFileSync(file, data, 'utf-8');
}

console.log("Generate documentation ...");
generateDoc();

