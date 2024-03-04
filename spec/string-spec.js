
describe('String', function () {
    beforeEach(function () {
        // require inside, to make not available in other tests but only here in this file
        require('../src/ruby-nice/string.js');
    });
    describe('additional methods', function () {
        it('has a ruby #upcase', function () {
            expect(typeof "TestCase".toUpCase).toEqual('function');
            expect("TestCase".toUpCase()).toEqual('TESTCASE');
        });
        it('has a ruby #downcase', function () {
            expect(typeof "TestCase".toDownCase).toEqual('function');
            expect("TestCase".toDownCase()).toEqual('testcase');
        });
        it('has a ruby #sample', function () {
            expect(typeof "TestCase".getSample).toEqual('function');
            expect("TestCase".getSample().length).toEqual(1);
        });
        it('has a ruby #first', function () {
            expect(typeof "TestCase".getFirst).toEqual('function');
            expect("TestCase".getFirst()).toEqual("T");
        });
        it('has a ruby #last', function () {
            expect(typeof "TestCase".getLast).toEqual('function');
            expect("TestCase".getLast()).toEqual("e");
        });
    });
});