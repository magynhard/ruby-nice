//<!-- MODULE -->//
if (typeof require === 'function' && typeof module !== 'undefined' && module.exports) {
    var Path = require('path');
    var Fs = require('fs');
    var Mime = require('mime');
    var File = require('./file');
    var RubyNice = require('./ruby-nice-class.js');
    var Typifier = require('typifier');
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
     * Deletes directory recursively including its contents, force=true
     *
     * @param {string|Array<string>} file_name path(s) to delete recursively
     */
    static rmRf(file_name) {
        const self = FileUtils;
        return self.rmRf(file_name, { force: true });
    }

    /**
     * Deletes directory recursively including its contents
     *
     * @param {string|Array<string>} file_name path(s) to delete recursively
     * @param {{force: boolean}} opt options
     */
    static rmR(file_name, opt) {
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