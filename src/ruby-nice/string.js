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

        /**
         * Matching the pattern (which may be a Regexp or a String).
         *
         * For each match, a result is generated and either added to the result array. If the pattern contains no groups, each individual result consists of the matched string.
         * If the pattern contains groups, each individual result is itself an array containing one entry per group.
         *
         * @example
         *      let a = "cruel world";
         *
         *      a.scan(/\w+/)
         *      // => ["cruel", "world"]
         *
         *      a.scan(/.../)
         *      // => ["cru", "el ", "wor"]
         *
         *      a.scan(/(...)/)
         *      // => [["cru"], ["el "], ["wor"]]
         *
         *      a.scan(/(..)(..)/)
         *      // => [["cr", "ue"], ["l ", "wo"]]
         *
         * @param {string|RegExp} pattern
         *
         */
        scan(pattern) {
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

Object.defineProperty(String.prototype, 'scan', {
    /**
     * Matching the pattern (which may be a Regexp or a String).
     *
     * For each match, a result is generated and either added to the result array. If the pattern contains no groups, each individual result consists of the matched string.
     * If the pattern contains groups, each individual result is itself an array containing one entry per group.
     *
     * @example
     *      let a = "cruel world";
     *
     *      a.scan(/\w+/)
     *      // => ["cruel", "world"]
     *
     *      a.scan(/.../)
     *      // => ["cru", "el ", "wor"]
     *
     *      a.scan(/(...)/)
     *      // => [["cru"], ["el "], ["wor"]]
     *
     *      a.scan(/(..)(..)/)
     *      // => [["cr", "ue"], ["l ", "wo"]]
     *
     * @param {string|RegExp} pattern
     *
     */
    value: function scan(pattern) {
        if(typeof pattern === "undefined") {
            throw new Error(`ArgumentError (wrong number of arguments (given 0, expected 1))`);
        }
        const escapeRegExp = (string) => {
            return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
        };
        if(Typifier.isString(pattern)) {
            pattern = new RegExp(escapeRegExp(pattern),'gm');
        } else {
            // add mandatory global option
            let new_flags = pattern.flags;
            if(!new_flags.includes("g")) new_flags += "g";
            pattern = new RegExp(pattern.source, new_flags);
        }
        const contains_groups = !!(pattern.source.match(/(^\(|[^\\]\()/));
        if(!contains_groups) {
            return [...this.matchAll(pattern)].map(e => e[0]);
        }
        const original_index = pattern.lastIndex;
        pattern.lastIndex = 0;
        let results = [];
        let res = null;
        while(res = pattern.exec(this)) {
            results.push(res.slice(1));
            if(pattern.lastIndex === 0) {
                break;
            }
        }
        pattern.lastIndex = original_index;
        return results;
    }
});

//<!-- MODULE -->//
if (typeof module !== 'undefined' && module.exports) {
    module.exports = 'String';
}
//<!-- /MODULE -->//