//<!-- MODULE -->//
if (typeof require === 'function' && typeof module !== 'undefined' && module.exports) {
    var Path = require('path');
    var Fs = require('fs');
    var Mime = require('mime');
    var RubyNice = require('./ruby-nice');
}
//<!-- /MODULE -->//

//----------------------------------------------------------------------------------------------------
// CLASS
//----------------------------------------------------------------------------------------------------

/**
 * File class port of ruby
 *
 * For node js only, does not work inside a browser.
 *
 */
class File {
    /**
     * Read file and return its content synchronously.
     *
     * @param {String} name path to file
     * @param {Object} opt
     * @param {'utf8' | 'binary' | 'buffer'} opt.encoding='utf8'
     * @param {Number} opt.length
     * @param {Number} opt.offset
     * @returns {string}
     */
    static read(name, opt) {
        const self = File;
        self._ensureRunningInNodeJs();
        let encoding = 'utf8';
        if(opt && ['binary','buffer'].includes(opt.encoding)) encoding = null;
        let content = Fs.readFileSync(name, encoding);
        if(opt) {
            if(opt.offset) content = content.slice(opt.offset);
            if(opt.length) content = content.slice(0,opt.length);
        }
        return content;
    }

    /**
     * Write into file synchronously.
     *
     * @param {String} name path to file
     * @param data {String|Buffer|TypedArray|DataView|Object} - data
     * @param {Object} opt
     * @param {'utf8' | 'binary' | 'buffer'} opt.encoding='utf8'
     * @param {'rs+' | 'ws' | 'as'} opt.flag='ws'
     * @returns {string}
     */
    static write(name, data, opt) {
        const self = File;
        self._ensureRunningInNodeJs();
        let options = { encoding: 'utf8' };
        if(opt) {
          if(opt.flag) options.flag = opt.flag;
          if(['binary','buffer'].includes(opt.encoding)) options.encoding = null;
        }
        return Fs.writeFileSync(name, data, options);
    }

    /**
     * Prevent using this class inside the browser
     *
     * @private
     */
    static _ensureRunningInNodeJs() {
        if(!RubyNice.isRunningInNodeJs()) {
            throw `Class '${this.class.name}' can only be used when running with node js.`;
        }
    }
}

//<!-- MODULE -->//
if(typeof module !== 'undefined' && module.exports) {
    module.exports = File;
}
//<!-- /MODULE -->//