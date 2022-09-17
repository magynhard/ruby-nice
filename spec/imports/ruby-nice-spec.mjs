/**
 * Test isolated module import dependencies (mjs)
 */

import RubyNice from "ruby-nice";
import { File } from "ruby-nice";

describe('RubyNice', function () {
    it('runs this test in node', function () {
        expect(RubyNice.isRunningInNodeJs()).toEqual(true);
    });
});

describe('File', function () {
    it('ensures that File is available', function () {
        expect(typeof File.read).toEqual('function');
    });
});

