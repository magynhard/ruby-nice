//<!-- MODULE -->//
if (typeof require === 'function' && typeof module !== 'undefined' && module.exports) {
    var Path = require('path');
    var Fs = require('fs');
    var Mime = require('mime');
    var RubyNice = require('./ruby-nice');
    var Typifier = require('typifier');
    var File = require('./file');
    require('./array');
}
//<!-- /MODULE -->//

/**
 * FileUtils class port of ruby
 *
 * For node js only, does not work inside a browser.
 *
 */
class FileUtils {

    /**
     * Copy file
     *
     * @param {string|Array<string>} src path(s) to source file(s)
     * @param {string} dest path to destination
     * @param {number|fs.constants.COPYFILE_EXCL|fs.constants.COPYFILE_FICLONE|fs.constants.COPYFILE_FICLONE_FORCE} mode specify behaviour of copy operation
     */
    static copy(src, dest, mode) {
        const self = FileUtils;
        RubyNice.ensureRunningInNodeJs();
        if(Typifier.isArray(src)) {
            if(File.isDirectory(dest)) {
                src.eachWithIndex((file, index) => {
                   Fs.copyFileSync(file, dest, mode);
                });
            } else {
                throw new Error(`Parameter 'src' is a array of files. Then the parameter 'dest' must be a valid directory! Directory not found: '${dest}'`);
            }
        } else {
            Fs.copyFileSync(src, dest, mode);
        }
    }

    /**
     * Create directory recursively
     *
     * @param {string|Array<string>} file_name path(s) to create
     */
    static mkdirP(file_name) {
        const self = FileUtils;
        RubyNice.ensureRunningInNodeJs();
        if(!Typifier.isArray(file_name)) {
            file_name = [file_name];
        }
        file_name.eachWithIndex((path, index) => {
            Fs.mkdirSync(path, { recursive: true });
        });
    }

    /**
     * Deletes directory recursively including its contents
     *
     * @param {string|Array<string>} file_name path(s) to delete recursively
     * @param {{force: boolean}} opt options
     */
    static rmRf(file_name, opt) {
        const self = FileUtils;
        RubyNice.ensureRunningInNodeJs();
        if(!Typifier.isArray(file_name)) {
            file_name = [file_name];
        }
        file_name.eachWithIndex((path, index) => {
            Fs.rmSync(path, { recursive: true, force: opt ? opt.force : false });
        });
    }
}

//<!-- MODULE -->//
if (typeof module !== 'undefined' && module.exports) {
    module.exports = FileUtils;
}
//<!-- /MODULE -->//