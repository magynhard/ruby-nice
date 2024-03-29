//<!-- MODULE -->//
if (typeof require === 'function' && typeof module !== 'undefined' && module.exports) {
    var RubyNice = require('./ruby-nice');
    var execSync = require('child_process').execSync;
    var File = require('./file');
    var spawnSync = require('child_process').spawnSync;
    var spawn = require('child_process').spawn;
    var Os = require('os');
}
//<!-- /MODULE -->//

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

    /**
     * Run a system command synchronously and return the child process Object.
     *
     * @param {string} command
     * @returns {{pid: number, output: Array, stdout: Buffer|string, stderr: Buffer|string, status: number|null, signal: string|null, error: Error}} child process object
     */
    static exec(command) {
        const options = {
          shell: true
        };
        return spawnSync(command, null, options);
    }

    /**
     * Start a system command asynchronously and detach the process from the main process and return the child process Object.
     *
     * @param {string} command
     * @returns {{pid: number, output: Array, stdout: Buffer|string, stderr: Buffer|string, status: number|null, signal: string|null, error: Error}} child process object
     */
    static execDetached(command) {
        const options = {
          shell: true,
          detached: true,
          stdio: 'ignore'
        };
        return spawn(command, null, options);
    }

    /**
     * Get the current user name.
     *
     * Fist checks for USER or USERNAME environment variable, after using operating system API.
     *
     * @returns {string}
     */
    static getUserName() {
        const self = System;
        RubyNice.ensureRunningInNodeJs();
        let user_name = null;
        if(process.env.USER) {
            user_name = process.env.USER;
        } else if(process.env.USERNAME) {
            user_name = process.env.USERNAME;
        } else if(Os.userInfo().username) {
            user_name = Os.userInfo().username;
        } else {
            throw new Error(`Could not determine user name. Your OS may be not supported yet.`);
        }
        return user_name;
    }
}

//<!-- MODULE -->//
if (typeof module !== 'undefined' && module.exports) {
    module.exports = System;
}
//<!-- /MODULE -->//