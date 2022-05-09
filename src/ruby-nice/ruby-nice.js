//<!-- MODULE -->//
if (typeof require === 'function' && typeof module !== 'undefined' && module.exports) {
    require('./array');
    var File = require('./file');
    require('./string');
}
//<!-- /MODULE -->//

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
        const self = CurlyBracketParser;
        return !self._runByNode();
    }
}

/**
 * @type {string}
 * @private
 */
RubyNice._version = "0.0.8";

//<!-- MODULE -->//
if (typeof module !== 'undefined' && module.exports) {
    module.exports = RubyNice;
}
//<!-- /MODULE -->//