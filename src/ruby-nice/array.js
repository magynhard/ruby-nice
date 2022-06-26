//<!-- MODULE -->//
if (typeof require === 'function' && typeof module !== 'undefined' && module.exports) {
    var Typifier = require('typifier');
    require('./object'); // here we extend array by default object features (each, getSample, ...)
}
//<!-- /MODULE -->//

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
         * Iterates over all elements of the array
         *
         * Breaks if returning false
         *
         * @example
         *      ['one','two','three'].eachWithIndex((elem, index) => {
         *          if(condition) return false;
         *          console.log(elem);
         *      })
         *
         * @param {eachArrayLoopCallback} loop_function
         * @returns {Array<any>} returns itself
         */
        eachWithIndex(loop_function) {
        }

        /**
         * Returns a new array that is a one dimensional flattening of itself.
         *
         * Different to Javascript flat(), which only flattens one dimension.
         *
         * @returns {Array}
         */
        flatten() {
        }

        /**
         * Returns the first element of the array
         *
         * @example
         *      ['one','two','three'].getFirst() // => 'one'
         *
         * @returns {any}
         */
        getFirst() {
        }

        /**
         * Returns the last element of the array
         *
         * @example
         *      ['one','two','three'].getLast() // => 'three'
         *
         * @returns {any}
         */
        getLast() {
        }

        /**
         * Returns the max element of the array. All values must be of type number.
         *
         * @example
         *      [3,7,2].getMax() // => 7
         *
         * @returns {number|null} returns null if array is empty
         */
        getMax() {
        }

        /**
         * Returns the min element of the array. All values must be of type number.
         *
         * @example
         *      [3,7,2,9].getMin() // => 2
         *
         * @returns {number|null} returns null if array is empty
         */
        getMin() {
        }

        /**
         * Returns a random element of the array
         *
         * @example
         *      ['one','two','three'].getSample() // => 'two'
         *
         * @returns {any}
         */
        getSample() {
        }
    }
});
//<!-- /DOC -->//

/**
 * @callback eachArrayLoopCallback
 * @param {any} value
 * @param {number} index
 */

Object.assign(Array.prototype, {
    /**
     * Returns a new array that is a one dimensional flattening of itself.
     *
     * Different to Javascript flat(), which only flattens one dimension.
     *
     * @returns {Array}
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
     * Returns the max element of the array. All values must be of type number.
     *
     * @example
     *      [3,7,2].getMax() // => 7
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
     *      [3,7,2,9].getMin() // => 2
     *
     * @returns {number|null} returns null if array is empty
     */
    getMin() {
        if(this.length === 0) return null;
        return Math.min(...this);
    }
});

//<!-- MODULE -->//
if(typeof module !== 'undefined' && module.exports) {
    module.exports = 'Array';
}
//<!-- /MODULE -->//