describe('Object', function () {
    beforeEach(function () {
        // require inside, to make not available in other tests but only here in this file
        require('../src/ruby-nice/object.js');
    });
    describe('each()', function () {
        it('function is defined', function () {
            expect(typeof {a: 'one', b: 'two', c: 'three'}.each).toEqual('function');
        });
        it('breaks inside the loop', function () {
            const sample = {a: 'one', b: 'two', c: 'three', d: 'four', e: 'five'};
            let collection = [];
            sample.each((key, value, index) => {
                collection.push([key, value]);
                if (index === 2) return false;
            });
            expect(collection).toEqual([['a', 'one'], ['b', 'two'], ['c', 'three']]);
        });
        it('loops over all elements', function () {
            const sample = {a: 'one', b: 'two', c: 'three', d: 'four', e: 'five'};
            let collection = [];
            sample.each((key, value, index) => {
                collection.push([key, value, index]);
            });
            expect(collection).toEqual([['a', 'one', 0], ['b', 'two', 1], ['c', 'three', 2], ['d', 'four', 3], ['e', 'five', 4]]);
        });
    });
});

describe('Object', function () {
    beforeEach(function () {
        // require inside, to make not available in other tests but only here in this file
        require('../src/ruby-nice/object.js');
    });
    describe('map()', function () {
        it('function is defined', function () {
            expect(typeof {a: 'one', b: 'two', c: 'three'}.map).toEqual('function');
        });
        it('maps over all elements', function () {
            const sample = {a: 'one', b: 'two', c: 'three', d: 'four', e: 'five'};
            const mapped_result = sample.map((key, value, index) => {
                return `${index}:${key}:${value}`;
            });
            expect(mapped_result).toEqual(['0:a:one','1:b:two','2:c:three','3:d:four','4:e:five']);
        });
    });
});


describe('Object', function () {
    beforeEach(function () {
        // require inside, to make not available in other tests but only here in this file
        require('../src/ruby-nice/object.js');
    });
    describe('getFirst()', function () {
        it('function is defined', function () {
            expect(typeof {a: 'one', b: 'two', c: 'three'}.getFirst).toEqual('function');
        });
        it('returns the first element', function () {
            expect({a: 'one', b: 'two', c: 'three'}.getFirst()).toEqual({a: 'one'});
        });
    });
});


describe('Object', function () {
    beforeEach(function () {
        // require inside, to make not available in other tests but only here in this file
        require('../src/ruby-nice/object.js');
    });
    describe('getLast()', function () {
        it('function is defined', function () {
            expect(typeof {a: 'one', b: 'two', c: 'three'}.getLast).toEqual('function');
        });
        it('returns the last element', function () {
            expect({a: 'one', b: 'two', c: 'three'}.getLast()).toEqual({c: 'three'});
        });
    });
});


describe('Object', function () {
    beforeEach(function () {
        // require inside, to make not available in other tests but only here in this file
        require('../src/ruby-nice/object.js');
    });
    describe('getSample()', function () {
        it('function is defined', function () {
            expect(typeof {a: 'one', b: 'two', c: 'three'}.getSample).toEqual('function');
        });
        it('returns a random element', function () {
            let samples = [];
            for (let i = 0; i < 999; i++) {
                const sample = {a: 'one', b: 'two', c: 'three'}.getSample();
                expect([{a: 'one'}, {b: 'two'}, {c: 'three'}]).toContain(sample);
                samples.push(sample);
            }
            // we expect after 999 runs, that all three samples have been included at least once
            expect(samples).toContain({a: 'one'});
            expect(samples).toContain({b: 'two'});
            expect(samples).toContain({c: 'three'});
        });
    });
});