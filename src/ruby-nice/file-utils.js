//<!-- MODULE -->//
if (typeof require === 'function' && typeof module !== 'undefined' && module.exports) {
    var Path = require('path');
    var Fs = require('fs');
    var Mime = require('mime');
    var RubyNice = require('./ruby-nice');
    var Typifier = require('typifier');
    require('./array');
}
//<!-- /MODULE -->//

//----------------------------------------------------------------------------------------------------
// CLASS
//----------------------------------------------------------------------------------------------------

/**
 * FileUtils class port of ruby
 *
 * For node js only, does not work inside a browser.
 *
 */
class FileUtils {

    /**
     * Create directory recursively
     *
     * @param {string|Array<string>} file_name path(s) to create
     */
    static mkdirP(file_name) {
        const self = FileUtils;
        RubyNice.ensureRunningInNodeJs();
        if(!Typifier.isArray(file_name)) {
            file_name = [file_name];
        }
        file_name.eachWithIndex((path, index) => {
            Fs.mkdirSync(path, { recursive: true });
        });
    }
    /**
     * Deletes directory recursively including its contents
     *
     * @param {string|Array<string>} file_name path(s) to delete recursively
     * @param {{force: boolean}} opt options
     */
    static rmRf(file_name, opt) {
        const self = FileUtils;
        RubyNice.ensureRunningInNodeJs();
        if(!Typifier.isArray(file_name)) {
            file_name = [file_name];
        }
        file_name.eachWithIndex((path, index) => {
            Fs.rmSync(path, { recursive: true, force: opt ? opt.force : false });
        });
    }
}

//<!-- MODULE -->//
if (typeof module !== 'undefined' && module.exports) {
    module.exports = FileUtils;
}
//<!-- /MODULE -->//