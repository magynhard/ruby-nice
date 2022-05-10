//<!-- MODULE -->//
if (typeof require === 'function' && typeof module !== 'undefined' && module.exports) {
    var Typifier = require('typifier');
}
//<!-- /MODULE -->//

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
         * Returns a new array that is a one dimensional flattening of itself.
         * @returns{Array}
         */
        flatten() {
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
         * Returns the max element of the array. All values must be of type number.
         *
         * @example
         *      [3,7,2].getMax() => 7
         *
         * @returns {number|null} returns null if array is empty
         */
        getMax() {
        }

        /**
         * Returns the min element of the array. All values must be of type number.
         *
         * @example
         *      [3,7,2,9].getMax() => 2
         *
         * @returns {number|null} returns null if array is empty
         */
        getMin() {
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
     * Returns a new array that is a one dimensional flattening of itself.
     *
     * Different to Javascript flat(), which only removes one dimension.
     *
     * @returns{Array}
     */
    flatten() {
        const recursiveFlat = (array) => {
            if(!array) array = this;
            const is_including_array = array.filter((el) => { return Typifier.isArray(el); }).length > 0;
            if(is_including_array) {
                return recursiveFlat(array.flat());
            }
            return array.flat();
        }
        return recursiveFlat();
    }
});


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
     * Returns the max element of the array. All values must be of type number.
     *
     * @example
     *      [3,7,2].getMax() => 7
     *
     * @returns {number|null} returns null if array is empty
     */
    getMax() {
        if(this.length === 0) return null;
        return Math.max(...this);
    }
});

Object.assign(Array.prototype, {
    /**
     * Returns the min element of the array. All values must be of type number.
     *
     * @example
     *      [3,7,2,9].getMax() => 2
     *
     * @returns {number|null} returns null if array is empty
     */
    getMin() {
        if(this.length === 0) return null;
        return Math.min(...this);
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