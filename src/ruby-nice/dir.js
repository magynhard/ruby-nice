//<!-- MODULE -->//
if (typeof require === 'function' && typeof module !== 'undefined' && module.exports) {
    var RubyNice = require('./ruby-nice');
}
//<!-- /MODULE -->//

//----------------------------------------------------------------------------------------------------
// CLASS
//----------------------------------------------------------------------------------------------------

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
     * Get value of given environment variable name
     *
     * @param {string} name
     * @returns {string}
     */
    static dir(pattern, options) {

    }

    static glob(pattern, options) {

    }
}

//<!-- MODULE -->//
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Dir;
}
//<!-- /MODULE -->//