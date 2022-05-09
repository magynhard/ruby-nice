//<!-- MODULE -->//
if (typeof require === 'function' && typeof module !== 'undefined' && module.exports) {
    var RubyNice = require('./ruby-nice');
    var execSync = require('child_process').execSync;
    var spawnSync = require('child_process').spawnSync;
}
//<!-- /MODULE -->//

//----------------------------------------------------------------------------------------------------
// CLASS
//----------------------------------------------------------------------------------------------------

/**
 * 'system' and `execute` port of ruby.
 *
 * As JavaScript does not support back tick run, we have a method for that.
 *
 * For node js only, does not work inside a browser.
 *
 */
class System {
    /**
     * Run a system command synchronously and return the output (stdout/stderr).
     *
     * @param {string} command
     * @returns {string}
     */
    static run(command) {
        let result = spawnSync(command, null, {
            shell: true
        });
        try {
            return result.stdout.toString() + result.stderr.toString();
        } catch (e) {
            return e.message;
        }
    }

    /**
     * Run a system command synchronously and return the return code.
     *
     * @param {string} command
     * @returns {number}
     */
    static system(command) {
        return spawnSync(command, null, { shell: true }).status || 0;
    }
}

//<!-- MODULE -->//
if (typeof module !== 'undefined' && module.exports) {
    module.exports = System;
}
//<!-- /MODULE -->//