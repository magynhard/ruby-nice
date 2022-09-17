
describe('Array', function () {
    beforeEach(function () {
        // require inside, to make not available in other tests but only here in this file
        require('../src/ruby-nice/array.js');
    });
    describe('eachWithIndex()', function () {
        it('function is defined', function () {
            expect(typeof ['one','two','three'].eachWithIndex).toEqual('function');
        });
        it('breaks inside the loop', function () {
            const sample = ['one','two','three','four','five'];
            let collection = [];
            sample.eachWithIndex((elem, index) => {
               collection.push(elem);
               if(index === 2) return false;
            });
            expect(collection).toEqual(['one','two','three']);
        });
        it('loops over all elements', function () {
            const sample = ['one','two','three','four','five'];
            let collection = [];
            sample.eachWithIndex((elem, index) => {
               collection.push(elem);
            });
            expect(collection).toEqual(sample);
        });
    });
});



describe('Array', function () {
    beforeEach(function () {
        // require inside, to make not available in other tests but only here in this file
        require('../src/ruby-nice/array.js');
    });
    describe('flatten()', function () {
        it('flattens 3 dimension array', function () {
            expect(['one','two',['three',['four']]].flatten()).toEqual(['one','two','three','four']);
        });
    });
});



describe('Array', function () {
    beforeEach(function () {
        // require inside, to make not available in other tests but only here in this file
        require('../src/ruby-nice/array.js');
    });
    describe('getFirst()', function () {
        it('function is defined', function () {
            expect(typeof ['one','two','three'].getFirst).toEqual('function');
        });
        it('returns the first element', function () {
            expect(['one','two','three'].getFirst()).toEqual('one');
        });
    });
});


describe('Array', function () {
    beforeEach(function () {
        // require inside, to make not available in other tests but only here in this file
        require('../src/ruby-nice/array.js');
    });
    describe('getLast()', function () {
        it('function is defined', function () {
            expect(typeof ['one','two','three'].getLast).toEqual('function');
        });
        it('returns the last element', function () {
            expect(['one','two','three'].getLast()).toEqual('three');
        });
    });
});


describe('Array', function () {
    beforeEach(function () {
        // require inside, to make not available in other tests but only here in this file
        require('../src/ruby-nice/array.js');
    });
    describe('getSample()', function () {
        it('function is defined', function () {
            expect(typeof ['one','two','three'].getSample).toEqual('function');
        });
        it('returns a random element', function () {
            let samples = [];
            for(let i = 0; i < 999; i++) {
                const sample = ['one','two','three'].getSample();
                expect(['one','two','three']).toContain(sample);
                samples.push(sample);
            }
            // we expect after 999 runs, that all three samples have been included at least once
            expect(samples).toContain('one');
            expect(samples).toContain('two');
            expect(samples).toContain('three');
        });
    });
});


describe('Array', function () {
    beforeEach(function () {
        // require inside, to make not available in other tests but only here in this file
        require('../src/ruby-nice/array.js');
    });
    describe('getMax()', function () {
        it('returns the max element in array', function () {
            expect([2,55,77,13,0].getMax()).toEqual(77);
        });
        it('returns null when empty array', function () {
            expect([].getMax()).toEqual(null);
        });
    });
});


describe('Array', function () {
    beforeEach(function () {
        // require inside, to make not available in other tests but only here in this file
        require('../src/ruby-nice/array.js');
    });
    describe('getMin()', function () {
        it('returns the max element in array', function () {
            expect([2,55,1,13,3].getMin()).toEqual(1);
        });
        it('returns null when empty array', function () {
            expect([].getMin()).toEqual(null);
        });
    });
});