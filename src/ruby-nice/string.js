//<!-- DOC -->//
/**
 * out of scope function only for jsdoc documentation generation purpose
 */
(function () {
    /**
     * RubyNice version to add methods directly to the class by monkey patching
     */
    class String {
        /**
         * Convert all characters inside the string
         * into lower case
         *
         * @example
         *      'this-isAnExample_string'.downcase()
         *      // => 'this-isanexample_string'
         *
         * @returns {string}
         */
        toDownCase() {
        }

        /**
         * Convert all characters inside the string
         * into upper case
         *
         * @example
         *  'this-isAnExample_string'.upcase()
         *  // => 'THIS-ISANEXAMPLE_STRING'
         *
         * @returns {string}
         */
        toUpCase() {
        }
    }
});
//<!-- /DOC -->//

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

//<!-- MODULE -->//
if(typeof module !== 'undefined' && module.exports) {
    module.exports = 'String';
}
//<!-- /MODULE -->//