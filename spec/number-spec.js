
describe('Number', function () {
    beforeEach(function () {
        // require inside, to make not available in other tests but only here in this file
        require('../src/ruby-nice/number.js');
    });
    describe('timesWithIndex()', function () {
        it('function is defined', function () {
            expect(typeof (3).timesWithIndex).toEqual('function');
            expect(typeof (3.3).timesWithIndex).toEqual('function');
        });
        it('breaks inside the loop', function () {
            const sample = 5;
            let collection = [];
            sample.timesWithIndex((index) => {
               collection.push('A');
               if(index === 2) return false;
            });
            expect(collection).toEqual(['A','A','A']);
        });
        it('loops over all elements', function () {
            const sample = 7;
            let collection = [];
            sample.timesWithIndex((index) => {
               collection.push('B');
            });
            expect(collection).toEqual(['B','B','B','B','B','B','B']);
        });
    });
});


describe('Number', function () {
    beforeEach(function () {
        // require inside, to make not available in other tests but only here in this file
        require('../src/ruby-nice/number.js');
    });
    describe('round()', function () {
        it('rounds a number', function () {
            expect((5.5).round()).toEqual(6);
        });
    });
});


describe('Number', function () {
    beforeEach(function () {
        // require inside, to make not available in other tests but only here in this file
        require('../src/ruby-nice/number.js');
    });
    describe('ceil()', function () {
        it('ceils a number', function () {
            expect((5.1).ceil()).toEqual(6);
        });
    });
});


describe('Number', function () {
    beforeEach(function () {
        // require inside, to make not available in other tests but only here in this file
        require('../src/ruby-nice/number.js');
    });
    describe('floor()', function () {
        it('floors a number', function () {
            expect((5.7).floor()).toEqual(5);
        });
    });
});