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
                src.eachWithIndex((file) => {
                   if(!File.isFile(file)) {
                       throw new Error(`Given 'src' in array of files is no valid file. File not found: '${file}'`);
                   }
                });
                src.eachWithIndex((file) => {
                    let final_dest = dest;
                    if(!final_dest.endsWith("/") && !final_dest.endsWith("\\")) {
                        final_dest += "/";
                    }
                    final_dest = final_dest + File.getBasename(file);
                    Fs.copyFileSync(file, final_dest, mode);
                });
            } else {
                throw new Error(`Parameter 'src' is a array of files. Then the parameter 'dest' must be a valid directory! Directory not found: '${dest}'`);
            }
        } else {
            if(!File.isFile(src)) {
                throw new Error(`Given 'src' file not found: '${src}'`);
            }
            // Add file name explicitly
            if(File.isDirectory(dest)) {
                if(!dest.endsWith("/") && !dest.endsWith("\\")) {
                    dest += "/";
                }
                dest = dest + File.getBasename(src);
            }
            Fs.copyFileSync(src, dest, mode);
        }
    }

    /**
     * Alias for FileUtils.copy(...)
     */
    static cp(src, dest, mode) {
        const self = FileUtils;
        self.copy(src, dest, mode);
    }

    /**
     * Copies src to dest. If src is a directory, this method copies all its contents recursively. If dest is a directory, copies src to dest/src.
     *
     * src can be a list of files.
     *
     * @param {string|Array<string>} src path(s) to source file(s)
     * @param {string} dest path to destination
     * @param {number|fs.constants.COPYFILE_EXCL|fs.constants.COPYFILE_FICLONE|fs.constants.COPYFILE_FICLONE_FORCE} mode specify behaviour of copy operation
     */
    static cp_r(src, dest, mode) {
        const self = FileUtils;
        RubyNice.ensureRunningInNodeJs();
        if(!mode) {
            mode = {};
        }
        mode.recursive = true;
        if(Typifier.isArray(src)) {
            if(File.isDirectory(dest)) {
                src.eachWithIndex((path) => {
                    if(!File.isExisting(path)) {
                        throw new Error(`Given 'src' in array of files is no valid path. Path not found: '${file}'`);
                    }
                });
                src.eachWithIndex((file) => {
                    let final_dest = dest;
                    if(!final_dest.endsWith("/") && !final_dest.endsWith("\\")) {
                        final_dest += "/";
                    }
                    final_dest = final_dest + File.getBasename(file);
                    Fs.cpSync(file, final_dest, mode);
                });
            } else {
                throw new Error(`Parameter 'src' is a array of paths. Then the parameter 'dest' must be a valid directory! Directory not found: '${dest}'`);
            }
        } else {
            if(!File.isExisting(src)) {
                throw new Error(`Given 'src' path not found: '${src}'`);
            }
            // Add file name explicitly
            if(File.isDirectory(dest)) {
                if(!dest.endsWith("/") && !dest.endsWith("\\")) {
                    dest += "/";
                }
                dest = dest + File.getBasename(src);
            }
            Fs.cpSync(src, dest, mode);
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
     * Move files from source to dest
     *
     * @param {string} source
     * @param {string}  dest
     * @param {Object} options
     * @param {boolean} options.noop=false
     */
    static move(source, dest, options = {}) {
        const self = File;
        if(options && options.noop) return;
        File.rename(source, dest);
    }

    /**
     * Move files from source to dest
     *
     * @param {string} source
     * @param {string}  dest
     * @param {Object} options
     * @param {boolean} options.noop=false
     */
    static mv(source, dest, options = {}) {
        const self = FileUtils;
        self.move(source, dest, options)
    }

    /**
     * Deletes directory recursively including its contents, force=true
     *
     * @param {string|Array<string>} file_name path(s) to delete recursively
     */
    static rmRf(file_name) {
        const self = FileUtils;
        return self.rmR(file_name, { force: true });
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