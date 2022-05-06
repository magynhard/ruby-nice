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
    static version() {
        const self = RubyNice;
        return self._version;
    }

    /**
     * Check if this javascript is running in node js
     *
     * @returns {Boolean} true if running inside node js (not browser)
     */
    static isRunningInNodeJs() {
        return (typeof module !== 'undefined' && module.exports);
    }

    //----------------------------------------------------------------------------------------------------

    /**
     * Check if this javascript is running in a browser
     *
     * @returns {Boolean} true if running inside browser
     */
    static isRunningInBrowser() {
        const self = CurlyBracketParser;
        return !self._runByNode();
    }
}

/**
 * @type {String}
 * @private
 */
RubyNice._version = "0.0.4";

//<!-- MODULE -->//
if (typeof module !== 'undefined' && module.exports) {
    module.exports = RubyNice;
}
//<!-- /MODULE -->//