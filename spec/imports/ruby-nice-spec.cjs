/**
 * Test isolated common js import dependencies (cjs)
 */

const Os = require("os");

if(Os.type().toLowerCase().includes("windows") || Os.release().toLowerCase().includes("microsoft") || Os.release().toLowerCase().includes("wsl")) {
    const message = `This import test and the other import tests can not be run on windows or windows subsystem for linux (wsl), but on linux. Skipping ...`;
    throw new Error(message);
}

const RubyNiceDefault = require('ruby-nice');
const FileByFile = require('ruby-nice/file');
const { File } = require('ruby-nice');
const { RubyNice } = require('ruby-nice');

describe('RubyNice', function () {
    it('runs this test in node', function () {
        expect(RubyNice.isRunningInNodeJs()).toEqual(true);
        expect(RubyNiceDefault.isRunningInNodeJs()).toEqual(true);
    });
});

describe('File', function () {
    it('ensures that File is available', function () {
        expect(typeof File.read).toEqual('function');
        expect(typeof FileByFile.read).toEqual('function');
    });
});
