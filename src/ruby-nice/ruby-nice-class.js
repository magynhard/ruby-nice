//<!-- MODULE -->//
if (typeof require === 'function' && typeof module !== 'undefined' && module.exports) {
}
//<!-- /MODULE -->//

/**
 * RubyNiceClass
 *
 * Rubynize Javascript - add ruby methods and functions to Javascript!
 *
 */
class RubyNiceClass {
    /**
     * Prevent using a method inside the browser
     */
    static ensureRunningInNodeJs() {
        const self = RubyNiceClass;
        if (!self.isRunningInNodeJs()) {
            throw new Error(`The used method can only be used when running with node js.`);
        }
    }

    static getVersion() {
        const self = RubyNiceClass;
        return self._version;
    }

    /**
     * Check if this javascript is running in node js
     *
     * @returns {boolean} true if running inside node js (not browser)
     */
    static isRunningInNodeJs() {
        return !!(typeof module !== 'undefined' && module.exports);
    }

    /**
     * Check if this javascript is running in a browser
     *
     * @returns {boolean} true if running inside browser
     */
    static isRunningInBrowser() {
        const self = RubyNiceClass;
        return !self.isRunningInNodeJs();
    }
}

/**
 * @type {string}
 * @private
 */
RubyNiceClass._version = "0.1.12";

//<!-- MODULE -->//
if (typeof module !== 'undefined' && module.exports) {
    module.exports = RubyNiceClass;
}
//<!-- /MODULE -->//