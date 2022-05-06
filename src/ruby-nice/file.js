//<!-- MODULE -->//
if (typeof require === 'function' && typeof module !== 'undefined' && module.exports) {
    var Path = require('path');
    var Fs = require('fs');
    var Mime = require('mime');
    var RubyNice = require('./ruby-nice');
}
//<!-- /MODULE -->//

//----------------------------------------------------------------------------------------------------
// CLASS
//----------------------------------------------------------------------------------------------------

/**
 * File class port of ruby
 *
 * For node js only, does not work inside a browser.
 *
 */
class File {

    /**
     * Get the last component of the given file name
     *
     * @example
     *  File.getBasename('/home/user/documents/letter.txt')
     *  // => 'letter.txt'
     *
     * @example
     *  File.getBasename('/home/user/documents/letter.txt','.txt')
     *  // => 'letter'
     *
     * @example
     *  File.getBasename('/home/user/documents/image.jpg','.*')
     *  // => 'image'
     *
     * @param {String} file_name
     * @param {String} suffix If suffix is given and present at the end of file_name, it is removed. If suffix is '.*', any extension will be removed.
     */
    static getBasename(file_name, suffix) {
        const self = File;
        file_name = self.normalizePath(file_name);
        let base_name = file_name.split('/').filter(e=>e !== '').last();
        if (suffix) {
            if (suffix === '.*' && base_name.includes('.')) {
                base_name = base_name.substring(0, base_name.lastIndexOf('.'));
            } else if (base_name.endsWith(suffix)) {
                base_name = base_name.substring(0, base_name.lastIndexOf(suffix));
            }
        }
        return base_name;
    }

    /**
     * Get all components of the given file name except of the last one
     *
     * @example
     *  File.getDirname('/home/user/documents/letter.txt')
     *  // => '/home/user/documents'
     *
     * @example
     *  File.getDirname('/home/user/documents/some_file_without_extension')
     *  // => '/home/user/documents'
     *
     * @example
     *  File.getDirname('/home/user/documents/')
     *  // => '/home/user'
     *
     * @param {String} file_name
     * @returns {String}
     */
    static getDirname(file_name) {
        const self = File;
        if(file_name.endsWith('/')) {
            file_name = file_name.substring(0, file_name.length-1);
        }
        return file_name.substring(0,self.normalizePath(file_name).lastIndexOf('/'));
    }

    /**
     * Converts a pathname to an absolute pathname
     *
     * @param {String} file_name path of the file to expand
     * @param {String} dir_string optional starting point of the given path
     * @returns {String} absolute pathname
     *
     */
    static expandPath(file_name, dir_string = "") {
        if(dir_string) {
            if(dir_string.endsWith('/')) {
                dir_string = dir_string.substring(0,dir_string.length-1);
            }
            file_name = dir_string + '/' + file_name;
        }
        return Path.resolve(file_name);
    }

    /**
     * Check if given file name exists and is a directory
     *
     * @param {String} file_name path of the file to check
     * @returns {Boolean} true if file exists and is a directory, otherwise false
     *
     */
    static isDirectory(file_name) {
        const self = File;
        return self.isExisting(file_name) && Fs.lstatSync(file_name).isDirectory();
    }

    /**
     * Check if given file name exists
     *
     * @param {String} file_name path of the file to check
     * @returns {Boolean} true if file exists, otherwise false
     *
     */
    static isExisting(file_name) {
        return Fs.existsSync(file_name);
    }

    /**
     * Check if given file name exists and is a file
     *
     * @param {String} file_name path of the file to check
     * @returns {Boolean} true if file exists and is a file, otherwise false
     *
     */
    static isFile(file_name) {
        const self = File;
        return self.isExisting(file_name) && Fs.lstatSync(file_name).isFile();
    }

    /**
     * Read file and return its content synchronously
     *
     * @param {String} file_name path to file
     * @param {Object} opt
     * @param {'utf8' | 'binary' | 'buffer' | 'base64'} opt.encoding='utf8'
     * @param {Number} opt.length
     * @param {Number} opt.offset
     * @returns {string}
     */
    static read(file_name, opt) {
        const self = File;
        self._ensureRunningInNodeJs();
        let encoding = 'utf8';
        if (opt && ['binary', 'buffer'].includes(opt.encoding)) encoding = null;
        let content = Fs.readFileSync(file_name, encoding);
        if (opt && opt.encoding !== 'base64') {
            if (opt.offset) content = content.slice(opt.offset);
            if (opt.length) content = content.slice(0, opt.length);
        }
        return content;
    }

    /**
     * Read a file and return as data URI that can be embedded on HTML for example
     *
     * @param {String} file_name path to file
     * @returns {String} base64 encoded data URI
     */
    static readAsDataUri(file_name) {
        const mime = Mime.getType(file_name);
        if(mime) {
            const data = Fs.readFileSync(file_name, 'base64');
            return `data:${mime};base64,${data}`;
        } else {
            throw `No mime type found for file '${file_name}'`;
        }
    }

    /**
     * Normalize path and replace all back slashes to slashes
     *
     * @param {String} path
     */
    static normalizePath(path) {
        return path.replace(/\\/g, '/');
    }

    /**
     * Write into file synchronously.
     *
     * @param {String} name path to file
     * @param data {String|Buffer|TypedArray|DataView|Object} - data
     * @param {Object} opt
     * @param {'utf8' | 'binary' | 'buffer'} opt.encoding='utf8'
     * @param {'rs+' | 'ws' | 'as'} opt.flag='ws'
     * @returns {string}
     */
    static write(name, data, opt) {
        const self = File;
        self._ensureRunningInNodeJs();
        let options = {encoding: 'utf8'};
        if (opt) {
            if (opt.flag) options.flag = opt.flag;
            if (['binary', 'buffer'].includes(opt.encoding)) options.encoding = null;
        }
        return Fs.writeFileSync(name, data, options);
    }

    /**
     * Prevent using this class inside the browser
     *
     * @private
     */
    static _ensureRunningInNodeJs() {
        if (!RubyNice.isRunningInNodeJs()) {
            throw `Class '${this.class.name}' can only be used when running with node js.`;
        }
    }
}

//<!-- MODULE -->//
if (typeof module !== 'undefined' && module.exports) {
    module.exports = File;
}
//<!-- /MODULE -->//