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
    class Number {
        /**
         * Loops n times
         *
         * Breaks if returning false
         *
         * @example
         *      (5).timesWithIndex((index) => {
         *          if(condition) return false;
         *          console.log(index);
         *      })
         *
         * @param {eachIndexLoopCallback} loop_function
         * @returns {Number} returns itself
         */
        timesWithIndex(loop_function) {
        }

        /**
         * Wrapper for Math.round()
         *
         * @example
         *      (5.6).round()
         *      => 6
         *
         * @returns {Number}
         */
        round() {
        }

        /**
         * Wrapper for Math.floor()
         *
         * @example
         *      (5.7).floor()
         *      => 5
         *
         * @returns {Number}
         */
        floor() {
        }

        /**
         * Wrapper for Math.ceil()
         *
         * @example
         *      (5.1).ceil()
         *      => 6
         *
         * @returns {Number}
         */
        ceil() {
        }
    }
});
//<!-- /DOC -->//

/**
 * @callback eachIndexLoopCallback
 * @param {number} index
 */

Object.defineProperty(Number.prototype, 'timesWithIndex', {
    /**
     * Loops n times
     *
     * Breaks if returning false
     *
     * @example
     *      (5).timesWithIndex((index) => {
     *          if(condition) return false;
     *          console.log(index);
     *      })
     *
     * @param {eachIndexLoopCallback} loop_function
     * @returns {Number} returns itself
     */
    value: function timesWithIndex(loop_function) {
        if (typeof loop_function === 'function') {
            if (Typifier.isNumber(this) || Typifier.isNumberClass(this)) {
                for (let i = 0; i < this; ++i) {
                    if (loop_function(i) === false) {
                        break;
                    }
                }
            } else {
                console.warn(`${Typifier.getType(this)}.timesWithIndex is not a valid function`);
            }
        }
        return this;
    },
    enumerable: false
});

Object.defineProperty(Number.prototype, 'round', {
    /**
     * Wrapper for Math.round()
     *
     * @example
     *      (5.6).round()
     *      => 6
     *
     * @returns {Number}
     */
    value: function round() {
            if (Typifier.isNumber(this) || Typifier.isNumberClass(this)) {
                return Math.round(this);
            } else {
                console.warn(`${Typifier.getType(this)}.round is not a valid function`);
            }
    },
    enumerable: false
});

Object.defineProperty(Number.prototype, 'ceil', {
    /**
     * Wrapper for Math.ceil()
     *
     * @example
     *      (5.1).ceil()
     *      => 6
     *
     * @returns {Number}
     */
    value: function ceil() {
            if (Typifier.isNumber(this) || Typifier.isNumberClass(this)) {
                return Math.ceil(this);
            } else {
                console.warn(`${Typifier.getType(this)}.ceil is not a valid function`);
            }
    },
    enumerable: false
});

Object.defineProperty(Number.prototype, 'floor', {
    /**
     * Wrapper for Math.floor()
     *
     * @example
     *      (5.7).floor()
     *      => 5
     *
     * @returns {Number}
     */
    value: function floor() {
            if (Typifier.isNumber(this) || Typifier.isNumberClass(this)) {
                return Math.floor(this);
            } else {
                console.warn(`${Typifier.getType(this)}.floor is not a valid function`);
            }
    },
    enumerable: false
});

//<!-- MODULE -->//
if(typeof module !== 'undefined' && module.exports) {
    module.exports = 'Number';
}
//<!-- /MODULE -->//