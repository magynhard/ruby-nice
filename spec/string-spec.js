


describe('String', function () {
    beforeEach(function () {
        // require inside, to make not available in other tests but only here in this file
        require('../src/ruby-nice/string.js');
    });
    describe('additional methods', function () {
        it('has a ruby #upcase', function () {
            expect(typeof "TestCase".upcase).not.toEqual('undefined');
            expect("TestCase".upcase()).toEqual('TESTCASE');
        });
    });
});