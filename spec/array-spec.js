


describe('Array', function () {
    beforeEach(function () {
        // require inside, to make not available in other tests but only here in this file
        require('../src/ruby-nice/array.js');
    });
    describe('additional methods', function () {
        it('has a ruby #upcase', function () {
            expect(typeof ['one','two','three'].first).toEqual('function');
            expect(['one','two','three'].first()).toEqual('one');
        });
    });
});