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
    describe('scan()', function () {
        it('scan method exists', function () {
            expect(typeof "TestCase".scan).toEqual('function');
        });
        it('scans a regex', function () {
            expect("TestCaseNaseCase".scan(/ase/)).toEqual(["ase", "ase", "ase"]);
        });
        it('scans a string', function () {
            expect("TestCaseNaseCase".scan("ase")).toEqual(["ase", "ase", "ase"]);
        });
        it('scans without parameter', function () {
            expect(() => "TestCaseNaseCase".scan()).toThrow(new Error(`ArgumentError (wrong number of arguments (given 0, expected 1))`));
        });
        it('scans a regex with groups 1', function () {
            expect("TestCaseNaseMase".scan(/(a[a-z])([a-z])/)).toEqual([["as", "e"], ["as", "e"], ["as", "e"]]);
        });
        it('scans a regex with groups 2', function () {
            expect("cruel world".scan(/\w+/)).toEqual(["cruel", "world"]);
        });
        it('scans a regex with groups 3', function () {
            expect("cruel world".scan(/.../)).toEqual(["cru", "el ", "wor"]);
        });
        it('scans a regex with groups 4', function () {
            expect("cruel world".scan(/(...)/)).toEqual([["cru"], ["el "], ["wor"]]);
        });
        it('scans a regex with groups 5', function () {
            expect("cruel world".scan(/(..)(..)/)).toEqual([["cr", "ue"], ["l ", "wo"]]);
        });
    });
});