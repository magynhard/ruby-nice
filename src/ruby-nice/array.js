
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
    class Array {
        /**
         * Returns the last element of the array
         *
         * @example usage
         *      ['one','two','three'].last => 'three'
         *
         * @returns {any}
         */
        last() {
            let result_index = 0;
            if(this.length > 0) {
                result_index = this.length-1;
            }
            return this[result_index];
        }

        /**
         * Returns the first element of the array
         *
         * @example usage
         *      ['one','two','three'].first => 'one'
         *
         * @returns {any}
         */
        first() {
            return this[0];
        }
    }
});
//<!-- /DOC -->//

//----------------------------------------------------------------------------------------------------
// CLASS MONKEY PATCH
//----------------------------------------------------------------------------------------------------

Object.assign(Array.prototype, {
    /**
     * Returns the last element of the array
     *
     * @example usage
     *      ['one','two','three'].last => 'three'
     *
     * @returns {any}
     */
    last() {
        let result_index = 0;
        if(this.length > 0) {
            result_index = this.length-1;
        }
        return this[result_index];
    }
});

Object.assign(Array.prototype, {
    /**
     * Returns the first element of the array
     *
     * @example usage
     *      ['one','two','three'].first => 'one'
     *
     * @returns {any}
     */
    first() {
        return this[0];
    }
});

//<!-- MODULE -->//
if(typeof module !== 'undefined' && module.exports) {
    module.exports = 'Array';
}
//<!-- /MODULE -->//