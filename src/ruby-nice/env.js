//<!-- MODULE -->//
if (typeof require === 'function' && typeof module !== 'undefined' && module.exports) {
    var RubyNice = require('./ruby-nice');
}
//<!-- /MODULE -->//

/**
 * ENV class port of ruby.
 *
 * As JavaScript does not support bracket methods, we have a getter and setter instead.
 *
 * For node js only, does not work inside a browser.
 *
 */
class Env {
    /**
     * Get value of given environment variable name
     *
     * @param {string} name
     * @returns {string}
     */
    static get(name) {
        return process.env[name];
    }

    /**
     * Set value of given environment variable name
     *
     * @param {string} name
     * @param {string} value
     * @returns {string}
     */
    static set(name, value) {
        process.env[name] = value;
    }
}

//<!-- MODULE -->//
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Env;
}
//<!-- /MODULE -->//