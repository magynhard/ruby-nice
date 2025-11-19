//<!-- MODULE -->//
if (typeof require === 'function' && typeof module !== 'undefined' && module.exports) {
    var RubyNice = require('./ruby-nice');
    var Glob = require('glob');
    require('./array');
    var File = require('./file');
    var Os = require('os');
}

//<!-- /MODULE -->//

/**
 * Dir class port of ruby.
 *
 * As JavaScript does not support bracket methods, we have a getter and setter instead.
 *
 * For Node.js only, does not work inside a browser.
 *
 */
class Dir {
    /**
     * Expands pattern, which is a pattern string or an Array of pattern
     * strings, and returns an array containing the matching filenames.
     *
     * @example
     *
     *   // find all js files in current directory
     *   Dir.glob('*.js');
     *
     *   // find all js files in specified directory
     *   Dir.glob('*.js', null, '/home/user/project');
     *
     *   // find all js and txt files in specified directory
     *   Dir.glob(['*.js', '*.txt'], null, '/home/user/project');
     *
     * @param {string|Array<string>} pattern
     * @param {object} options of npm package 'glob'
     * @param {string} base_path shortcut of options.cwd with higher prio
     * @returns {Array<string>|null}
     */
    static glob(pattern, options, base_path) {
        const is_array = pattern instanceof Array && pattern.constructor.name === 'Array';
        if (!is_array) {
            pattern = [pattern];
        }
        let results = [];
        if (!options) options = {};
        if (base_path) {
            options.cwd = base_path;
        }
        pattern.eachWithIndex((elem) => {
            let final_path = File.normalizePath(elem);
            // WORKAROUND for windows platform:
            // if pattern is absolute with drive letter, set cwd and remove drive letter to work on first level, like C:/*
            // because node Glob.sync does not work on first level :-(
            const is_absolute_path = final_path[1] === ":";
            if(is_absolute_path) {
                final_path = final_path.substring(2);
                const drive_letter = File.normalizePath(elem).substring(0,2);
                options.cwd = drive_letter;
            }
            results.push(Glob.sync(final_path, options));
        });
        return results.flatten();
    }

    /**
     * Returns the path to the current working directory of this process as a string.
     *
     * @example
     *
     *  console.log(Dir.pwd());
     *  // => /home/user/project
     *
     * @returns {string}
     */
    static pwd() {
        return process.cwd();
    }

    /**
     * Changes the current working directory of the process to the given string.
     *
     * When called without an argument, changes the directory to the value of the
     * environment variable HOME, or LOGDIR or the operating systems home directory by API.
     *
     * @example
     *
     * Dir.chdir('/home/user/project');
     *
     * Dir.chdir(); // changes to home directory
     *
     * @param {string} dir
     * @throws {Error} if directory can not be changed
     */
    static chdir(dir) {
        if (typeof dir === 'undefined') {
            dir = process.env.HOME || process.env.LOGDIR || Os.homedir();
        }
        process.chdir(dir);
    }

    /**
     * Deletes the given directory.
     *
     * @example
     *
     * Dir.delete('/path/to/directory');
     *
     * @param {string} file_name
     * @param {Object} opts
     * @param {boolean} opts.recursive=false If true, perform a recursive directory removal. In recursive mode, operations are retried on failure
     * @param {boolean} opts.max_retries=0 If an EBUSY, EMFILE, ENFILE, ENOTEMPTY, or EPERM error is encountered, Node.js retries the operation with a linear backoff wait of retryDelay milliseconds longer on each try. This option represents the number of retries. This option is ignored if the recursive option is not true
     * @param {boolean} opts.retry_delay=100 The amount of time in milliseconds to wait between retries. This option is ignored if the recursive option is not true
     */
    static delete(file_name, opts = {}) {
        RubyNice.ensureRunningInNodeJs();
        const final_opts = {
            recursive: opts.recursive,
            maxRetries: opts.max_retries,
            retryDelay: opts.retry_delay
        }
        Fs.rmdirSync(file_name, final_opts);
    }

    /**
     * Returns true if the named file is a directory, false otherwise.
     *
     * @example
     *
     * Dir.isExisting('/path/to/existing_directory'); // => true
     * Dir.isExisting('/path/to/not_existing_directory'); // => false
     *
     * @param {string} file_name
     * @returns {boolean}
     */
    static isExisting(file_name) {
        return File.isDirectory(file_name);
    }

    /**
     * Returns the home directory of the current user.
     *
     * @example
     *
     * Dir.getHome(); // => /home/username
     *
     * @return {string}
     */
    static getHome() {
        return File.getHomePath();
    }
}

//<!-- MODULE -->//
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Dir;
}
//<!-- /MODULE -->//