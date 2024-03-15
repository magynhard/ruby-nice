/**
 * Test isolated module import dependencies (mjs)
 */

//
// This import test can not be run on windows or windows subsystem for linux (wsl), but on linux`);
//

import RubyNice from "ruby-nice";

describe('Array', function () {
    it('ensures that Array is available', function () {
        expect(typeof [1,2,3].eachWithIndex).toEqual('function');
    });
});
