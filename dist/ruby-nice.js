/**
 * ruby-nice
 *
 * The nice javascript library to rubynize your javascript to be a happy programmer again.
 *
 * @version 0.0.30
 * @date 2022-05-20T16:09:53.721Z
 * @link https://github.com/magynhard/ruby-nice
 * @author Matthäus J. N. Beyrle
 * @copyright Matthäus J. N. Beyrle
 */


//----------------------------------------------------------------------------------------------------
// JSDOC definition only
//----------------------------------------------------------------------------------------------------



//----------------------------------------------------------------------------------------------------
// CLASS MONKEY PATCH
//----------------------------------------------------------------------------------------------------

/**
 * @callback eachArrayLoopCallback
 * @param {any} value
 * @param {number} index
 */


Object.assign(Array.prototype, {
    /**
     * Returns a new array that is a one dimensional flattening of itself.
     *
     * Different to Javascript flat(), which only removes one dimension.
     *
     * @returns{Array}
     */
    flatten() {
        const recursiveFlat = (array) => {
            if(!array) array = this;
            const is_including_array = array.filter((el) => { return Typifier.isArray(el); }).length > 0;
            if(is_including_array) {
                return recursiveFlat(array.flat());
            }
            return array.flat();
        }
        return recursiveFlat();
    }
});

Object.assign(Array.prototype, {
    /**
     * Returns the max element of the array. All values must be of type number.
     *
     * @example
     *      [3,7,2].getMax() => 7
     *
     * @returns {number|null} returns null if array is empty
     */
    getMax() {
        if(this.length === 0) return null;
        return Math.max(...this);
    }
});

Object.assign(Array.prototype, {
    /**
     * Returns the min element of the array. All values must be of type number.
     *
     * @example
     *      [3,7,2,9].getMax() => 2
     *
     * @returns {number|null} returns null if array is empty
     */
    getMin() {
        if(this.length === 0) return null;
        return Math.min(...this);
    }
});




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
     * Delete file synchronously
     *
     * @param {string} file_name path to file
     * @returns {string}
     */
    static delete(file_name, opt) {
        const self = File;
        RubyNice.ensureRunningInNodeJs();
        Fs.unlinkSync(file_name);
    }

    /**
     * Converts a pathname to an absolute pathname
     *
     * '~' are not resolved.
     *
     * @param {string} file_name path of the file to expand
     * @param {string} dir_string optional starting point of the given path
     * @returns {string} absolute pathname
     *
     */
    static getAbsolutePath(file_name, dir_string) {
        const self = File;
        return self.expandPath(file_name, dir_string, { expand_user_dir: false });
    }

    /**
     * Returns the last access time for the file as a Date object.
     *
     * @param {string} file_name
     * @returns {Date}
     */
    static getAccessTime(file_name) {
        return Fs.lstatSync(file_name).atime;
    }

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
     * @param {string} file_name
     * @param {string} suffix If suffix is given and present at the end of file_name, it is removed. If suffix is '.*', any extension will be removed.
     */
    static getBasename(file_name, suffix) {
        const self = File;
        file_name = self.normalizePath(file_name);
        let base_name = file_name.split('/').filter(e=>e !== '').getLast();
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
     * Returns the birth time for the file as a Date object.
     *
     * @param {string} file_name
     * @returns {Date}
     */
    static getBirthTime(file_name) {
        return Fs.lstatSync(file_name).birthtime;
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
     * @param {string} file_name
     * @returns {string}
     */
    static getDirname(file_name) {
        const self = File;
        file_name = self.normalizePath(file_name);
        return file_name.substring(0,self.normalizePath(file_name).lastIndexOf('/'));
    }

    /**
     * Get the size of the given file in bytes
     *
     * @example
     *  File.getSize('myFile.txt');
     *  // => 12345
     *
     * @param {string} file_name
     * @returns {number} size in bytes
     */
    static getSize(file_name) {
        const self = File;
        file_name = self.normalizePath(file_name);
        return Fs.statSync(file_name).size;
    }

    /**
     * Converts a pathname to an absolute pathname
     *
     * '~' is resolved to the home directory, '~user' to the given users home directory.
     *
     * @param {string} file_name path of the file to expand
     * @param {string} dir_string optional starting point of the given path
     * @param {Object} options
     * @param {boolean} expand_user_dir=true
     * @returns {string} absolute pathname
     *
     */
    static expandPath(file_name, dir_string = "", options = {}) {
        const self = File;
        if(!options) options = {};
        if(typeof options.expand_user_dir === 'undefined') options.expand_user_dir = true;
        file_name = self.normalizePath(file_name);
        dir_string = self.normalizePath(dir_string);
        if(file_name.startsWith('~') && dir_string && dir_string.startsWith('~')) {
            return Path.resolve(self._resolveUserDirInPath(file_name));
        } else {
            file_name = dir_string ? self._resolveUserDirInPath(dir_string) + '/' + self._resolveUserDirInPath(file_name) : self._resolveUserDirInPath(file_name);
            return Path.resolve(file_name);
        }
    }

    /**
     * Check if given file name exists and is a directory
     *
     * @param {string} file_name path of the file to check
     * @returns {boolean} true if file exists and is a directory, otherwise false
     *
     */
    static isDirectory(file_name) {
        const self = File;
        return self.isExisting(file_name) && Fs.lstatSync(file_name).isDirectory();
    }

    /**
     * Check if given file exists but has no content
     *
     * @param {string} file_name path of the file to check
     * @returns {boolean} true if file exists and has zero content, otherwise false
     *
     */
    static isEmpty(file_name) {
        const self = File;
        return self.isExisting(file_name) && self.getSize(file_name) === 0;
    }

    /**
     * Check if given file name exists
     *
     * @param {string} file_name path of the file to check
     * @returns {boolean} true if file exists, otherwise false
     *
     */
    static isExisting(file_name) {
        return Fs.existsSync(file_name);
    }

    /**
     * Check if given file name exists and is a file
     *
     * @param {string} file_name path of the file to check
     * @returns {boolean} true if file exists and is a file, otherwise false
     *
     */
    static isFile(file_name) {
        const self = File;
        return self.isExisting(file_name) && Fs.lstatSync(file_name).isFile();
    }

    /**
     * Normalize path and replace all back slashes to slashes
     * and remove trailing slashes
     *
     * @param {string} path
     * @returns {string} normalized path
     */
    static normalizePath(path) {
        const self = File;
        return self._cutTrailingSlash(path.replace(/\\/g, '/'));
    }

    /**
     * Read file and return its content synchronously
     *
     * @param {string} file_name path to file
     * @param {Object} opt
     * @param {'utf8' | 'binary' | 'buffer' | 'base64'} opt.encoding='utf8'
     * @param {Number} opt.length
     * @param {Number} opt.offset
     * @returns {string}
     */
    static read(file_name, opt) {
        const self = File;
        RubyNice.ensureRunningInNodeJs();
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
     * Rename the given file
     *
     * @param {string} file_name path to original file
     * @param {string} new_path path to new file
     */
    static rename(file_name, new_path) {
        const self = File;
        RubyNice.ensureRunningInNodeJs();
        Fs.renameSync(file_name, new_path);
    }

    /**
     * Read a file and return as data URI that can be embedded on HTML for example
     *
     * @param {string} file_name path to file
     * @returns {string} base64 encoded data URI
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
     * Write into file synchronously.
     *
     * @param {string} name path to file
     * @param data {String|Buffer|TypedArray|DataView|Object} - data
     * @param {Object} opt
     * @param {'utf8' | 'binary' | 'buffer'} opt.encoding='utf8'
     * @param {'rs+' | 'ws' | 'as'} opt.flag='ws'
     * @returns {string}
     */
    static write(name, data, opt) {
        const self = File;
        RubyNice.ensureRunningInNodeJs();
        let options = {encoding: 'utf8'};
        if (opt) {
            if (opt.flag) options.flag = opt.flag;
            if (['binary', 'buffer'].includes(opt.encoding)) options.encoding = null;
        }
        return Fs.writeFileSync(name, data, options);
    }

    /**
     * Cut a trailing slash at the end of the path
     *
     * @param {string} path
     * @private
     */
    static _cutTrailingSlash(path) {
        if(path.endsWith('/')) {
            return path.substring(0, path.length-1);
        } else {
            return path;
        }
    }

    /**
     * Resolves '~' and '~username' to user dirs inside given path
     *
     * @param {string} path
     * @returns {string}
     * @private
     */
    static _resolveUserDirInPath(path) {
        const self = File;
        const user_home_regex = /^~([^\/]*)\//;
        const user_dir_match = path.match(user_home_regex);
        if(user_dir_match) {
            if(user_dir_match[1]) {
                path = self.getDirname(process.env.HOME) + '/' + user_dir_match[1] + '/' + path.replace(user_home_regex, '');
            } else {
                path = path.replace(user_home_regex, process.env.HOME + '/');
            }
        }
        return path;
    }
}




//----------------------------------------------------------------------------------------------------
// JSDOC definition only
//----------------------------------------------------------------------------------------------------



//----------------------------------------------------------------------------------------------------
// CLASS MONKEY PATCH
//----------------------------------------------------------------------------------------------------

Object.assign(Object.prototype, {
    /**
     * Iterates over all elements of an object
     *
     * Breaks if returning false
     *
     * @example
     *      { a: 'one', b: 'two', c: 'three'}.each((key, value, index) => {
     *          if(condition) return false;
     *          console.log(key, value);
     *      })
     *
     * @param {eachObjectLoopCallback|eachArrayLoopCallback} loop_function
     * @returns {Object<any>} returns itself
     */
    each(loop_function) {
        if (typeof loop_function === 'function') {
            if (Typifier.isArray(this)) {
                for (let i = 0; i < this.length; ++i) {
                    const state = {state: false};
                    if (loop_function(this[i], i, state) === false) {
                        break;
                    }
                }
            } else if (Typifier.isObject(this)) {
                let index = 0;
                for (const [key, value] of Object.entries(this)) {
                    if (loop_function(key, value, index) === false) {
                        break;
                    }
                    ++index;
                }
            } else {
                throw new TypeError(`${Typifier.getType(this)}.each is not a function`);
            }
        }
        return this;
    }
});

Object.assign(Object.prototype, {
    /**
     * Maps over all elements of an object
     *
     * @example
     *      { a: 'one', b: 'two', c: 'three'}.map((key, value, index) => {
     *          return value;
     *      })
     *      => ['one','two','three']
     *
     * @param {eachObjectLoopCallback} loop_function
     * @returns {Array<any>} returns itself
     */
    map(loop_function) {
        if (typeof loop_function === 'function') {
            if (Typifier.isObject(this)) {
                const object_array = Object.entries(this).map((value, index) => { a = {}; a[value[0]] = value[1]; return a })
                let result_array = [];
                let index = 0;
                for (const [key, value] of Object.entries(this)) {
                    const result = loop_function(key, value, index);
                    result_array.push(result);
                    ++index;
                }
                return result_array;
            } else {
                throw new TypeError(`${Typifier.getType(this)}.map is not a function`);
            }
        }
    }
});

/**
 * @callback eachObjectLoopCallback
 * @param {any} key
 * @param {any} value
 * @param {number} index
 */

Object.assign(Object.prototype, {
    /**
     * Returns the first element of the array
     *
     * @example
     *      { a: 'one', b: 'two', c: 'three'}.getFirst() => { a: 'one' }
     *
     * @returns {Object}
     */
    getFirst() {
        if (Typifier.isArray(this) && this.length > 0) {
            return this[0];
        } else if (Typifier.isObject(this) && Object.entries(this).length > 0) {
            const first = Object.entries(this)[0];
            let a = {};
            a[first[0]] = first[1];
            return a;
        } else {
            throw new TypeError(`${Typifier.getType(this)}.getFirst is not a function`);
        }
    }
});

Object.assign(Object.prototype, {
    /**
     * Returns the last element of the array
     *
     * @example
     *      { a: 'one', b: 'two', c: 'three'}.getLast() => { c: 'three' }
     *
     * @returns {Object}
     */
    getLast() {
        if (Typifier.isArray(this) && this.length > 0) {
            return this[this.length - 1];
        } else if (Typifier.isObject(this) && Object.entries(this).length > 0) {
            const last = Object.entries(this)[Object.entries(this).length - 1];
            let a = {};
            a[last[0]] = last[1];
            return a;
        } else {
            throw new TypeError(`${Typifier.getType(this)}.getLast is not a function`);
        }
    }
});

Object.assign(Object.prototype, {
    /**
     * Returns a random element of the array
     *
     * @example
     *      { a: 'one', b: 'two', c: 'three'}.getSample() => { b: 'two' }
     *
     * @returns {Object}
     */
    getSample() {
        if (Typifier.isArray(this) && this.length > 0) {
            const random_index = Math.floor(Math.random() * this.length);
            return this[random_index];
        } else if (Typifier.isObject(this) && Object.entries(this).length > 0) {
            const random_index = Math.floor(Math.random() * Object.entries(this).length);
            const random_el = Object.entries(this)[random_index];
            let a = {};
            a[random_el[0]] = random_el[1];
            return a;
        } else {
            throw new TypeError(`${Typifier.getType(this)}.getSample is not a function`);
        }
    }
});



//----------------------------------------------------------------------------------------------------
// JSDOC definition only
//----------------------------------------------------------------------------------------------------



//----------------------------------------------------------------------------------------------------
// CLASS MONKEY PATCH
//----------------------------------------------------------------------------------------------------

Object.assign(String.prototype, {
    /**
     * Convert all characters inside the string
     * into lower case
     *
     * @example
     *  'this-isAnExample_string'
     *  // => 'this-isanexample_string'
     *
     * @returns {string}
     */
    toDownCase() {
        return this.toLocaleLowerCase();
    }
});

Object.assign(String.prototype, {
    /**
     * Convert all characters inside the string
     * into upper case
     *
     * @example conversion
     *      'this-isAnExample_string' => 'THIS-ISANEXAMPLE_STRING'
     *
     * @returns {string}
     */
    toUpCase() {
        return this.toLocaleUpperCase();
    }
});




/**
 * RubyNice
 *
 * Rubynize Javascript - add ruby methods and functions to Javascript!
 *
 */
class RubyNice {
    /**
     * Prevent using a method inside the browser
     */
    static ensureRunningInNodeJs() {
        const self = RubyNice;
        if (!self.isRunningInNodeJs()) {
            throw new Error(`The used method can only be used when running with node js.`);
        }
    }

    static getVersion() {
        const self = RubyNice;
        return self._version;
    }

    /**
     * Check if this javascript is running in node js
     *
     * @returns {boolean} true if running inside node js (not browser)
     */
    static isRunningInNodeJs() {
        return (typeof module !== 'undefined' && module.exports);
    }

    /**
     * Check if this javascript is running in a browser
     *
     * @returns {boolean} true if running inside browser
     */
    static isRunningInBrowser() {
        const self = RubyNice;
        return !self.isRunningInNodeJs();
    }
}

/**
 * @type {string}
 * @private
 */
RubyNice._version = "0.0.30";


