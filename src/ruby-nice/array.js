
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
         * Iterates over all elements of an array
         *
         * Breaks if returning false
         *
         * @example
         *      ['one','two','three'].each((elem, index) => {
         *          if(condition) return false;
         *          console.log(elem);
         *      })
         *
         * @param {eachLoopCallback} loop_function
         * @returns {Array<any>} returns itself
         */
        each(loop_function) {
        }

        /**
         * Iterates over all elements of an array
         *
         * Breaks if returning false
         *
         * @example
         *      ['one','two','three'].each((elem, index) => {
         *          if(condition) return false;
         *          console.log(elem);
         *      })
         *
         * @param {eachLoopCallback} loop_function
         * @returns {Array<any>} returns itself
         */
        eachWithIndex(loop_function) {
        }

        /**
         * Returns the first element of the array
         *
         * @example
         *      ['one','two','three'].first => 'one'
         *
         * @returns {any}
         */
        getFirst() {
        }

        /**
         * Returns the last element of the array
         *
         * @example
         *      ['one','two','three'].last => 'three'
         *
         * @returns {any}
         */
        getLast() {
        }

        /**
         * Returns a random element of the array
         *
         * @example
         *      ['one','two','three'].sample => 'two'
         *
         * @returns {any}
         */
        getSample() {
        }
    }
});
//<!-- /DOC -->//

//----------------------------------------------------------------------------------------------------
// CLASS MONKEY PATCH
//----------------------------------------------------------------------------------------------------

Object.assign(Array.prototype, {
    /**
     * Iterates over all elements of an array
     *
     * Breaks if returning false
     *
     * @example
     *      ['one','two','three'].each((elem, index) => {
     *          if(condition) return false;
     *          console.log(elem);
     *      })
     *
     * @param {eachLoopCallback} loop_function
     * @returns {Array<any>} returns itself
     */
    each(loop_function) {
        if(typeof loop_function === 'function') {
            for(let i = 0; i < this.length; ++i) {
                const state = { state: false };
                if(loop_function(this[i], i, state) === false) {
                    break;
                }
            }
        }
        return this;
    }
});

Object.assign(Array.prototype, {
    /**
     * Iterates over all elements of an array
     *
     * Breaks if returning false
     *
     * @example
     *      ['one','two','three'].each((elem, index) => {
     *          if(condition) return false;
     *          console.log(elem);
     *      })
     *
     * @param {eachLoopCallback} loop_function
     * @returns {Array<any>} returns itself
     */
    eachWithIndex(loop_function) {
        return this.each(loop_function);
    }
});
/**
 * @callback eachLoopCallback
 * @param {any} elem
 * @param {number} index
 */


Object.assign(Array.prototype, {
    /**
     * Returns the first element of the array
     *
     * @example
     *      ['one','two','three'].first => 'one'
     *
     * @returns {any}
     */
    getFirst() {
        return this[0];
    }
});

Object.assign(Array.prototype, {
    /**
     * Returns the last element of the array
     *
     * @example
     *      ['one','two','three'].last => 'three'
     *
     * @returns {any}
     */
    getLast() {
        let result_index = 0;
        if(this.length > 0) {
            result_index = this.length-1;
        }
        return this[result_index];
    }
});

Object.assign(Array.prototype, {
    /**
     * Returns a random element of the array
     *
     * @example
     *      ['one','two','three'].sample => 'two'
     *
     * @returns {any}
     */
    getSample() {
        const random_index = Math.floor(Math.random() * this.length);
        return this[random_index];
    }
});

//<!-- MODULE -->//
if(typeof module !== 'undefined' && module.exports) {
    module.exports = 'Array';
}
//<!-- /MODULE -->//