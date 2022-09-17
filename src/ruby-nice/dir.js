//<!-- MODULE -->//
if (typeof require === 'function' && typeof module !== 'undefined' && module.exports) {
    var RubyNice = require('./ruby-nice');
    var Glob = require('glob');
    require('./array');
}
//<!-- /MODULE -->//

/**
 * Dir class port of ruby.
 *
 * As JavaScript does not support bracket methods, we have a getter and setter instead.
 *
 * For node js only, does not work inside a browser.
 *
 */
class Dir {
    /**
     * Expands pattern, which is a pattern string or an Array of pattern
     * strings, and returns an array containing the matching filenames.
     *
     * @param {string|Array<string>} pattern
     * @param {object} options of npm package 'glob'
     * @param {string} base_path shortcut of options.cwd with higher prio
     * @returns {Array<string>|null}
     */
    static glob(pattern, options, base_path) {
        const is_array = pattern instanceof Array && pattern.constructor.name === 'Array';
        if(!is_array) {
            pattern = [pattern];
        }
        let results = [];
        if(!options) options = {};
        if(base_path) options.cwd = base_path;
        pattern.eachWithIndex((elem) => {
            results.push(Glob.sync(elem, options));
        });
        return results.flatten();
    }
}

//<!-- MODULE -->//
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Dir;
}
//<!-- /MODULE -->//