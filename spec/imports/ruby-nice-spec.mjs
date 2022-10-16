/**
 * Test isolated module import dependencies (mjs)
 */

import RubyNiceDefault from "ruby-nice";
import { RubyNice } from "ruby-nice";
import FileDefault from "ruby-nice/file";
import { File } from "ruby-nice";

describe('RubyNice', function () {
    it('runs this test in node', function () {
        expect(RubyNice.isRunningInNodeJs()).toEqual(true);
        expect(RubyNiceDefault.isRunningInNodeJs()).toEqual(true);
    });
});

describe('File', function () {
    it('ensures that File is available', function () {
        expect(typeof File.read).toEqual('function');
        expect(typeof FileDefault.read).toEqual('function');
    });
});

describe('Array', function () {
    it('ensures that Array is available', function () {
        expect(typeof [1,2,3].eachWithIndex).toEqual('function');
    });
});

