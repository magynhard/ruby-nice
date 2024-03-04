
const Fs = require("fs-extra");
const Typifier = require("typifier");

console.log("CLEAN UP /tmp ...");

let file_name = 'tmp';

if(!Typifier.isArray(file_name)) {
    file_name = [file_name];
}
file_name.forEach((path, index) => {
    Fs.rmSync(path, { recursive: true, force: true });
});

Fs.mkdirpSync('tmp');