
//----------------------------------------------------------------------------------------------------
// JSDOC definition only
//----------------------------------------------------------------------------------------------------

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
         * @example conversion
         *      'this-isAnExample_string' => 'this-isanexample_string'
         *
         * @returns {string}
         */
        downcase() {
            return RubyNice.toLowerCase(this);
        }

        /**
         * Convert all characters inside the string
         * into upper case
         *
         * @example conversion
         *      'this-isAnExample_string' => 'THIS-ISANEXAMPLE_STRING'
         *
         * @returns {string}
         */
        upcase() {
            return RubyNice.toUpperCase(this);
        }
    }
});
//<!-- /DOC -->//

//----------------------------------------------------------------------------------------------------
// CLASS MONKEY PATCH
//----------------------------------------------------------------------------------------------------

Object.assign(String.prototype, {
    /**
     * Convert all characters inside the string
     * into lower case
     *
     * @example conversion
     *      'this-isAnExample_string' => 'this-isanexample_string'
     *
     * @returns {string}
     */
    downcase() {
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
    upcase() {
        return this.toLocaleUpperCase();
    }
});

//<!-- MODULE -->//
if(typeof module !== 'undefined' && module.exports) {
    module.exports = 'String';
}
//<!-- /MODULE -->//