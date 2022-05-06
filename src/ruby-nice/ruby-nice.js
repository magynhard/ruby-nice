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
}

/**
 * @type {string}
 * @private
 */
RubyNice._version = "0.0.1";

//<!-- MODULE -->//
if (typeof module !== 'undefined' && module.exports) {
    module.exports = RubyNice;
}
//<!-- /MODULE -->//