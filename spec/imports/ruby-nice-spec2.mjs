/**
 * Test isolated module import dependencies (mjs)
 */

import RubyNice from "ruby-nice";

describe('Array', function () {
    it('ensures that Array is available', function () {
        expect(typeof [1,2,3].eachWithIndex).toEqual('function');
    });
});
