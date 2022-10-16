/**
 * Test isolated common js import dependencies (cjs)
 *
 * Runs on linux only
 */

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
