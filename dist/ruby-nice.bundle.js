/**
 * ruby-nice
 *
 * The nice javascript library to rubynize your javascript to be a happy programmer again.
 *
 * @version 0.1.12
 * @date 2022-06-26T21:19:46.574Z
 * @link https://github.com/magynhard/ruby-nice
 * @author Matthäus J. N. Beyrle
 * @copyright Matthäus J. N. Beyrle
 */




/**
 * @callback eachArrayLoopCallback
 * @param {any} value
 * @param {number} index
 */

Object.assign(Array.prototype, {
    /**
     * Returns a new array that is a one dimensional flattening of itself.
     *
     * Different to Javascript flat(), which only flattens one dimension.
     *
     * @returns {Array}
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
     *      [3,7,2].getMax() // => 7
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
     *      [3,7,2,9].getMin() // => 2
     *
     * @returns {number|null} returns null if array is empty
     */
    getMin() {
        if(this.length === 0) return null;
        return Math.min(...this);
    }
});




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






/**
 * @callback eachIndexLoopCallback
 * @param {number} index
 */

Object.defineProperty(Number.prototype, 'timesWithIndex', {
    /**
     * Loops n times
     *
     * Breaks if returning false
     *
     * @example
     *      (5).timesWithIndex((index) => {
     *          if(condition) return false;
     *          console.log(index);
     *      })
     *
     * @param {eachIndexLoopCallback} loop_function
     * @returns {Number} returns itself
     */
    value: function timesWithIndex(loop_function) {
        if (typeof loop_function === 'function') {
            if (Typifier.isNumber(this) || Typifier.isNumberClass(this)) {
                for (let i = 0; i < this; ++i) {
                    if (loop_function(i) === false) {
                        break;
                    }
                }
            } else {
                console.warn(`${Typifier.getType(this)}.timesWithIndex is not a valid function`);
            }
        }
        return this;
    },
    enumerable: false
});

Object.defineProperty(Number.prototype, 'round', {
    /**
     * Wrapper for Math.round()
     *
     * @example
     *      (5.6).round()
     *      => 6
     *
     * @returns {Number}
     */
    value: function round() {
            if (Typifier.isNumber(this) || Typifier.isNumberClass(this)) {
                return Math.round(this);
            } else {
                console.warn(`${Typifier.getType(this)}.round is not a valid function`);
            }
    },
    enumerable: false
});

Object.defineProperty(Number.prototype, 'ceil', {
    /**
     * Wrapper for Math.ceil()
     *
     * @example
     *      (5.1).ceil()
     *      => 6
     *
     * @returns {Number}
     */
    value: function ceil() {
            if (Typifier.isNumber(this) || Typifier.isNumberClass(this)) {
                return Math.ceil(this);
            } else {
                console.warn(`${Typifier.getType(this)}.ceil is not a valid function`);
            }
    },
    enumerable: false
});

Object.defineProperty(Number.prototype, 'floor', {
    /**
     * Wrapper for Math.floor()
     *
     * @example
     *      (5.7).floor()
     *      => 5
     *
     * @returns {Number}
     */
    value: function floor() {
            if (Typifier.isNumber(this) || Typifier.isNumberClass(this)) {
                return Math.floor(this);
            } else {
                console.warn(`${Typifier.getType(this)}.floor is not a valid function`);
            }
    },
    enumerable: false
});






Object.defineProperty(Object.prototype, 'eachWithIndex', {
    /**
     * Iterates over all elements of the object
     *
     * Breaks if returning false
     *
     * @example
     *      { a: 'one', b: 'two', c: 'three'}.eachWithIndex((key, value, index) => {
     *          if(condition) return false;
     *          console.log(key, value);
     *      })
     *
     * @param {eachObjectLoopCallback|eachArrayLoopCallback} loop_function
     * @returns {Object<any>} returns itself
     */
    value: function eachWithIndex(loop_function) {
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
                console.warn(`${Typifier.getType(this)}.eachWithIndex is not a valid function`);
            }
        }
        return this;
    },
    enumerable: false
});

Object.defineProperty(Object.prototype, 'mapObject', {
    /**
     * Maps over all elements of an object
     *
     * @example
     *      { a: 'one', b: 'two', c: 'three'}.mapObject((key, value, index) => {
     *          return value;
     *      })
     *      // => ['one','two','three']
     *
     * @param {eachObjectLoopCallback} loop_function
     * @returns {Object<any>} returns itself
     */
    value: function mapObject(loop_function) {
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
                console.warn(`${Typifier.getType(this)}.mapObject is not a valid function`);
            }
        }
    },
    enumerable: false
});

/**
 * @callback eachObjectLoopCallback
 * @param {any} key
 * @param {any} value
 * @param {number} index
 */

Object.defineProperty(Object.prototype, 'getFirst', {
    /**
     * Returns the first element of the object
     *
     * @example
     *      { a: 'one', b: 'two', c: 'three'}.getFirst() // => { a: 'one' }
     *
     * @returns {Object}
     */
    value: function getFirst() {
        if(Typifier.is('Column', this)) return; // compatibility workaround for 'table-layout' package
        if (Typifier.isArray(this) && this.length > 0) {
            return this[0];
        } else if (Typifier.isObject(this) && Object.entries(this).length > 0) {
            const first = Object.entries(this)[0];
            let a = {};
            a[first[0]] = first[1];
            return a;
        } else {
            console.warn(`${Typifier.getType(this)}.getFirst is not a valid function`);
        }
    },
    enumerable: false
});

Object.defineProperty(Object.prototype, 'getLast', {
    /**
     * Returns the last element of the object
     *
     * @example
     *      { a: 'one', b: 'two', c: 'three'}.getLast() // => { c: 'three' }
     *
     * @returns {Object}
     */
    value: function getLast() {
        if(Typifier.is('Column', this)) return; // compatibility workaround for 'table-layout' package
        if (Typifier.isArray(this) && this.length > 0) {
            return this[this.length - 1];
        } else if (Typifier.isObject(this) && Object.entries(this).length > 0) {
            const last = Object.entries(this)[Object.entries(this).length - 1];
            let a = {};
            a[last[0]] = last[1];
            return a;
        } else {
            console.warn(`${Typifier.getType(this)}.getLast is not a valid function`);
        }
    },
    enumerable: false
});

Object.defineProperty(Object.prototype, 'getSample', {
    /**
     * Returns a random element of the object
     *
     * @example
     *      { a: 'one', b: 'two', c: 'three'}.getSample() // => { b: 'two' }
     *
     * @returns {Object}
     */
    value: function getSample() {
        if(Typifier.is('Column', this)) return; // compatibility workaround for 'table-layout' package
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
            console.warn(`${Typifier.getType(this)}.getSample is not a valid function`);
        }
    },
    enumerable: false
});




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
RubyNice._version = "0.1.12";


/**
 * typifier
 *
 * The javascript library to get or check the type of a given variable.
 *
 * @version 0.0.10
 * @date 2022-05-20T16:39:57.200Z
 * @link https://github.com/magynhard/typifier
 * @author Matthäus J. N. Beyrle
 * @copyright Matthäus J. N. Beyrle
 */


/**
 * Typifier
 *
 * The javascript library to get or check the type of a given variable.
 *
 */
class Typifier {
    /**
     * Get the version of the used library
     * @returns {string}
     */
    static getVersion() {
        const self = Typifier;
        return self._version;
    }

    /**
     * Check if given variable is of type Array
     *
     * @param {any} value
     * @returns {boolean} true if Array, otherwise false
     */
    static isArray(value) {
        return value instanceof Array && value.constructor.name === 'Array';
    }

    /**
     * Check if given variable is of type Object
     *
     * @param {any} value
     * @returns {boolean} true if Object, otherwise false
     */
    static isObject(value) {
        return value instanceof Object && value.constructor.name === 'Object';
    }

    /**
     * Check if given variable is of type string (primitive)
     *
     * @param {any} value
     * @returns {boolean} true if 'string', otherwise false
     */
    static isString(value) {
        return typeof value === 'string';
    }

    /**
     * Check if given variable is of type String (class instance)
     *
     * @param {any} value
     * @returns {boolean} true if instance of class 'String', otherwise false
     */
    static isStringClass(value) {
        return value instanceof Object && value.constructor.name === 'String';
    }

    /**
     * Check if given variable is of type number (primitive)
     *
     * @param {any} value
     * @returns {boolean} true if 'number', otherwise false
     */
    static isNumber(value) {
        return typeof value === 'number';
    }

    /**
     * Check if given variable is of type Number (class instance)
     *
     * @param {any} value
     * @returns {boolean} true if instance of class 'Number', otherwise false
     */
    static isNumberClass(value) {
        return value instanceof Object && value.constructor.name === 'Number';
    }

    /**
     * Check if given variable is of type Date
     *
     * @param {any} value
     * @returns {boolean} true if Date, otherwise false
     */
    static isDate(value) {
        return value instanceof Date;
    }

    /**
     * Check if given variable is of type RegExp
     *
     * @param {any} value
     * @returns {boolean} true if RegExp, otherwise false
     */
    static isRegExp(value) {
        return value instanceof RegExp;
    }

    /**
     * Check if given variable is of type NaN
     *
     * @param {any} value
     * @returns {boolean} true if NaN, otherwise false
     */
    static isNaN(value) {
        return typeof value === 'number' && (value).toString() === 'NaN';
    }

    /**
     * Check if given variable is of type Infinity
     *
     * @param {any} value
     * @returns {boolean} true if Infinity, otherwise false
     */
    static isInfinity(value) {
        return value === Infinity;
    }

    /**
     * Check if given variable is of type undefined
     *
     * @param {any} value
     * @returns {boolean} true if undefined, otherwise false
     */
    static isUndefined(value) {
        return typeof value === 'undefined';
    }

    /**
     * Check if given variable is of type null
     *
     * @param {any} value
     * @returns {boolean} true if null, otherwise false
     */
    static isNull(value) {
        return typeof value === null;
    }

    /**
     * Check if given variable is of type boolean (primitive)
     *
     * @param {any} value
     * @returns {boolean} true if 'boolean' or instance of class 'Boolean', otherwise false
     */
    static isBoolean(value) {
        return typeof value === 'boolean' || (value instanceof Object && value.constructor.name === 'Boolean');
    }

    /**
     * Check if given variable is of type Boolean (class instance)
     *
     * @param {any} value
     * @returns {boolean} true if instance of class 'Boolean', otherwise false
     */
    static isBooleanClass(value) {
        return value instanceof Object && value.constructor.name === 'Boolean';
    }

    /**
     * Check if given variable is of type function
     *
     * @param {any} value
     * @returns {boolean} true if function, otherwise false
     */
    static isFunction(value) {
        return typeof value === 'function';
    }

    /**
     * Check if the given value is of the given type.
     *
     * @example
     *  Typifier.is('Array',[1,2,3]) // => true
     *
     * @param {string} type
     * @param {any} value
     * @returns {boolean} true if the value is of the given type
     */
    static is(type, value) {
        const self = Typifier;
        return self.getType(value) === type;
    }

    /**
     * Get the type of the given value.
     * Primitive types are lower case.
     *
     * @example
     *  'Object'
     * @example
     *  'string'
     *
     * @param {any} value
     * @returns {string} type in pascal case format
     */
    static getType(value) {
        const self = Typifier;
        if (self.isArray(value)) {
            return 'Array';
        } else if (self.isObject(value)) {
            return 'Object';
        } else if (self.isString(value)) {
            return 'string';
        } else if (self.isStringClass(value)) {
            return 'String';
        } else if (self.isNumber(value)) {
            return 'number';
        } else if (self.isNumberClass(value)) {
            return 'Number';
        } else if (self.isDate(value)) {
            return 'Date';
        } else if (self.isRegExp(value)) {
            return 'RegExp';
        } else if (self.isNaN(value)) {
            return 'NaN';
        } else if (self.isInfinity(value)) {
            return 'Infinity';
        } else if (self.isUndefined(value)) {
            return 'undefined';
        } else if (self.isNull(value)) {
            return 'null';
        } else if (self.isBoolean(value)) {
            return 'boolean';
        } else if (self.isBooleanClass(value)) {
            return 'Boolean';
        } else if (self.isFunction(value)) {
            return 'function';
        } else {
            let type = 'Unknown';
            if (value && value.constructor) {
                type = value.constructor.name;
            } else if (value && value.prop && value.prop.constructor) {
                type = value.prop.constructor;
            } else {
                type = typeof value;
            }
            return LuckyCase.toPascalCase(type);
        }
    }
}

/**
 * @type {string}
 * @private
 */
Typifier._version = "0.0.10";



