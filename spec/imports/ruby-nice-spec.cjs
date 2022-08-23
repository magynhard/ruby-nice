/**
 * Test isolated common js import dependencies (cjs)
 */

const RubyNiceDefault = require('ruby-nice');
const { RubyNice } = require('ruby-nice');

describe('RubyNice', function () {
    it('runs this test in node', function () {
        expect(RubyNice.isRunningInNodeJs()).toEqual(true);
        expect(RubyNiceDefault.isRunningInNodeJs()).toEqual(true);
    });
});

