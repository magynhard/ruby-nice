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
 * For Node.js only, does not work inside a browser.
 *
 */
class Env {
    /**
     * Get value of given environment variable name in current process
     *
     * @example
     *
     *  // get environment variable PATH
     *  const path_value = Env.get('PATH');
     *
     * @param {string} name
     * @returns {string}
     */
    static get(name) {
        return process.env[name];
    }

    /**
     * Set value of given environment variable name in current process
     *
     * @example
     *
     * // set environment variable MY_VAR to 'my_value'
     * Env.set('MY_VAR', 'my_value');
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