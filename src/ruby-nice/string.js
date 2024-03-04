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

        /**
         * Get first character of the current string
         *
         * @example
         *  'Happy'.getFirst()
         *  // => 'H'
         *
         * @returns {string}
         */
        getFirst() {
        }

        /**
         * Get last character of the current string
         *
         * @example
         *  'Happy'.getLast()
         *  // => 'y'
         *
         * @returns {string}
         */
        getLast() {
        }

        /**
         * Returns a random element of the string
         *
         * @example
         *      'Happy'.getSample()
         *      // => 'H' | 'a' | 'p' | 'y'
         *
         * @returns {Object}
         */
        getSample() {
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

Object.defineProperty(String.prototype, 'getFirst', {
    /**
     * Get first character of the current string
     *
     * @example
     *  'Happy'.getFirst()
     *  // => 'H'
     *
     * @returns {string}
     */
    value: function getFirst() {
        return this[0];
    }
});

Object.defineProperty(String.prototype, 'getLast', {
    /**
     * Get last character of the current string
     *
     * @example
     *  'Happy'.getLast()
     *  // => 'y'
     *
     * @returns {string}
     */
    value: function getLast() {
        return this[this.length - 1];
    }
});

Object.defineProperty(String.prototype, 'getSample', {
    /**
     * Returns a random element of the string
     *
     * @example
     *      'Happy'.getSample()
     *      // => 'H' | 'a' | 'p' | 'y'
     *
     * @returns {Object}
     */
    value: function getSample() {
        const random_index = Math.floor(Math.random() * this.length);
        return this[random_index];
    }
});

//<!-- MODULE -->//
if (typeof module !== 'undefined' && module.exports) {
    module.exports = 'String';
}
//<!-- /MODULE -->//