//<!-- MODULE -->//
if (typeof require === 'function' && typeof module !== 'undefined' && module.exports) {
    var Typifier = require('typifier');
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
    class Object {
        /**
         * Iterates over all elements of the object
         *
         * Breaks if returning false
         *
         * @example
         *      { a: 'one', b: 'two', c: 'three'}.eachWithIndex((key, value, index) => {
         *          if(condition) return false;
         *          console.log(key, value);
         *      })
         *
         * @param {eachObjectLoopCallback|eachArrayLoopCallback} loop_function
         * @returns {Object<any>} returns itself
         */
        eachWithIndex(loop_function) {
        }

        /**
         * Maps over all elements of an object
         *
         * @example
         *      { a: 'one', b: 'two', c: 'three'}.mapObject((key, value, index) => {
         *          return value;
         *      })
         *      // => ['one','two','three']
         *
         * @param {eachObjectLoopCallback} loop_function
         * @returns {Object<any>} returns itself
         */
        mapObject(loop_function) {
        }

        /**
         * Returns the first element of the object
         *
         * @example
         *      { a: 'one', b: 'two', c: 'three'}.getFirst() // => { a: 'one' }
         *
         * @returns {Object}
         */
        getFirst() {
        }

        /**
         * Returns the last element of the object
         *
         * @example
         *      { a: 'one', b: 'two', c: 'three'}.getLast() // => { c: 'three' }
         *
         * @returns {Object}
         */
        getLast() {
        }

        /**
         * Returns a random element of the object
         *
         * @example
         *      { a: 'one', b: 'two', c: 'three'}.getSample() // => { b: 'two' }
         *
         * @returns {Object}
         */
        getSample() {
        }
    }
});
//<!-- /DOC -->//

Object.defineProperty(Object.prototype, 'eachWithIndex', {
    /**
     * Iterates over all elements of the object
     *
     * Breaks if returning false
     *
     * @example
     *      { a: 'one', b: 'two', c: 'three'}.eachWithIndex((key, value, index) => {
     *          if(condition) return false;
     *          console.log(key, value);
     *      })
     *
     * @param {eachObjectLoopCallback|eachArrayLoopCallback} loop_function
     * @returns {Object<any>} returns itself
     */
    value: function eachWithIndex(loop_function) {
        if (typeof loop_function === 'function') {
            if (Typifier.isArray(this)) {
                for (let i = 0; i < this.length; ++i) {
                    const state = {state: false};
                    if (loop_function(this[i], i, state) === false) {
                        break;
                    }
                }
            } else if (Typifier.isObject(this)) {
                let index = 0;
                for (const [key, value] of Object.entries(this)) {
                    if (loop_function(key, value, index) === false) {
                        break;
                    }
                    ++index;
                }
            } else {
                console.warn(`${Typifier.getType(this)}.eachWithIndex is not a valid function`);
            }
        }
        return this;
    },
    enumerable: false
});

Object.defineProperty(Object.prototype, 'mapObject', {
    /**
     * Maps over all elements of an object
     *
     * @example
     *      { a: 'one', b: 'two', c: 'three'}.mapObject((key, value, index) => {
     *          return value;
     *      })
     *      // => ['one','two','three']
     *
     * @param {eachObjectLoopCallback} loop_function
     * @returns {Object<any>} returns itself
     */
    value: function mapObject(loop_function) {
        if (typeof loop_function === 'function') {
            if (Typifier.isObject(this)) {
                const object_array = Object.entries(this).map((value, index) => { a = {}; a[value[0]] = value[1]; return a })
                let result_array = [];
                let index = 0;
                for (const [key, value] of Object.entries(this)) {
                    const result = loop_function(key, value, index);
                    result_array.push(result);
                    ++index;
                }
                return result_array;
            } else {
                console.warn(`${Typifier.getType(this)}.mapObject is not a valid function`);
            }
        }
    },
    enumerable: false
});

/**
 * @callback eachObjectLoopCallback
 * @param {any} key
 * @param {any} value
 * @param {number} index
 */

Object.defineProperty(Object.prototype, 'getFirst', {
    /**
     * Returns the first element of the object
     *
     * @example
     *      { a: 'one', b: 'two', c: 'three'}.getFirst() // => { a: 'one' }
     *
     * @returns {Object}
     */
    value: function getFirst() {
        if(Typifier.is('Column', this)) return; // compatibility workaround for 'table-layout' package
        if (Typifier.isArray(this) && this.length > 0) {
            return this[0];
        } else if (Typifier.isObject(this) && Object.entries(this).length > 0) {
            const first = Object.entries(this)[0];
            let a = {};
            a[first[0]] = first[1];
            return a;
        } else {
            console.warn(`${Typifier.getType(this)}.getFirst is not a valid function`);
        }
    },
    enumerable: false
});

Object.defineProperty(Object.prototype, 'getLast', {
    /**
     * Returns the last element of the object
     *
     * @example
     *      { a: 'one', b: 'two', c: 'three'}.getLast() // => { c: 'three' }
     *
     * @returns {Object}
     */
    value: function getLast() {
        if(Typifier.is('Column', this)) return; // compatibility workaround for 'table-layout' package
        if (Typifier.isArray(this) && this.length > 0) {
            return this[this.length - 1];
        } else if (Typifier.isObject(this) && Object.entries(this).length > 0) {
            const last = Object.entries(this)[Object.entries(this).length - 1];
            let a = {};
            a[last[0]] = last[1];
            return a;
        } else {
            console.warn(`${Typifier.getType(this)}.getLast is not a valid function`);
        }
    },
    enumerable: false
});

Object.defineProperty(Object.prototype, 'getSample', {
    /**
     * Returns a random element of the object
     *
     * @example
     *      { a: 'one', b: 'two', c: 'three'}.getSample() // => { b: 'two' }
     *
     * @returns {Object}
     */
    value: function getSample() {
        if(Typifier.is('Column', this)) return; // compatibility workaround for 'table-layout' package
        if (Typifier.isArray(this) && this.length > 0) {
            const random_index = Math.floor(Math.random() * this.length);
            return this[random_index];
        } else if (Typifier.isObject(this) && Object.entries(this).length > 0) {
            const random_index = Math.floor(Math.random() * Object.entries(this).length);
            const random_el = Object.entries(this)[random_index];
            let a = {};
            a[random_el[0]] = random_el[1];
            return a;
        } else {
            console.warn(`${Typifier.getType(this)}.getSample is not a valid function`);
        }
    },
    enumerable: false
});

//<!-- MODULE -->//
if (typeof module !== 'undefined' && module.exports) {
    module.exports = 'Object';
}
//<!-- /MODULE -->//