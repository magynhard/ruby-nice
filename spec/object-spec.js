describe('Object', function () {
    beforeEach(function () {
        // require inside, to make not available in other tests but only here in this file
        require('../src/ruby-nice/object.js');
    });
    describe('eachWithIndex()', function () {
        it('function is defined', function () {
            expect(typeof {a: 'one', b: 'two', c: 'three'}.eachWithIndex).toEqual('function');
        });
        it('breaks inside the loop', function () {
            const sample = {a: 'one', b: 'two', c: 'three', d: 'four', e: 'five'};
            let collection = [];
            sample.eachWithIndex((key, value, index) => {
                collection.push([key, value]);
                if (index === 2) return false;
            });
            expect(collection).toEqual([['a', 'one'], ['b', 'two'], ['c', 'three']]);
        });
        it('loops over all elements', function () {
            const sample = {a: 'one', b: 'two', c: 'three', d: 'four', e: 'five'};
            let collection = [];
            sample.eachWithIndex((key, value, index) => {
                collection.push([key, value, index]);
            });
            expect(collection).toEqual([['a', 'one', 0], ['b', 'two', 1], ['c', 'three', 2], ['d', 'four', 3], ['e', 'five', 4]]);
        });
        it('has good performance', function () {
            const sample = {};
            for(let i = 0; i < 1_000_000; ++i) {
                sample["key" + i] = Math.floor(Math.random() * 10001);
            }
            let collection = [];
            process.stdout.write(`\nBenchmark of eachWithIndex (Object): `);
            const start_benchmark = new Date();
            sample.eachWithIndex((key, value, index) => {
                sample[key] = value*234;
            });
            const end_benchmark = new Date();
            const duration_ms = end_benchmark - start_benchmark;
            console.log(duration_ms + "ms");
            expect(duration_ms).toBeLessThan(1000, `Test should run in less than 1000ms, but took ${duration_ms}ms`);
        });
    });
});

describe('Object', function () {
    beforeEach(function () {
        // require inside, to make not available in other tests but only here in this file
        require('../src/ruby-nice/object.js');
    });
    describe('mapObject()', function () {
        it('function is defined', function () {
            expect(typeof {a: 'one', b: 'two', c: 'three'}.mapObject).toEqual('function');
        });
        it('function is not a enumerable key', function () {
            const obi = {a: 'one', b: 'two', c: 'three'};
            let enumerables = [];
            for(let o in obi) {
                enumerables.push(o);
            }
            expect(enumerables).not.toContain('mapObject');
        });
        it('maps over all elements', function () {
            const sample = {a: 'one', b: 'two', c: 'three', d: 'four', e: 'five'};
            const mapped_result = sample.mapObject((key, value, index) => {
                return `${index}:${key}:${value}`;
            });
            expect(mapped_result).toEqual(['0:a:one','1:b:two','2:c:three','3:d:four','4:e:five']);
        });
        it('does not have object references on map result', function () {
            const sample = {a: 'one', object: { b: 1 }, c: 'three', d: 'four', e: 'five'};
            const mapped_result = sample.mapObject((key, value, index) => {
                const a = {};
                return a[key] = value;
            });
            mapped_result[1].b = 2;
            expect(sample.object.b).toEqual(1);
        });
    });
});

describe('Object', function () {
    beforeEach(function () {
        // require inside, to make not available in other tests but only here in this file
        require('../src/ruby-nice/object.js');
    });
    describe('filterObject()', function () {
        it('function is defined', function () {
            expect(typeof {a: 'one', b: 'two', c: 'three'}.filterObject).toEqual('function');
        });
        it('function is not a enumerable key', function () {
            const obi = {a: 'one', b: 'two', c: 'three'};
            let enumerables = [];
            for(let o in obi) {
                enumerables.push(o);
            }
            expect(enumerables).not.toContain('filterObject');
        });
        it('filter over all elements', function () {
            const sample = {a: 'one', b: 'two', c: 'three', d: 'four', e: 'five'};
            const filtered_result = sample.filterObject((key, value, index) => {
                return value.length === 3;
            });
            expect(filtered_result).toEqual({a: 'one', b: 'two'});
            const filtered_result_2 = sample.filterObject((key, value, index) => {
                return value.includes("o");
            });
            expect(filtered_result_2).toEqual({a: 'one', b: 'two', d: 'four'});
        });
        it('does not have object references on filter result', function () {
            const sample = {a: 'one', object: { b: 1 }, c: 'three', d: 'four', e: 'five'};
            const filtered_result = sample.filterObject((key, value, index) => {
                return key === 'object';
            });
            filtered_result.object.b = 2;
            expect(sample.object.b).toEqual(1);
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


describe('Object', function () {
    beforeEach(function () {
        // require inside, to make not available in other tests but only here in this file
        require('../src/ruby-nice/object.js');
    });
    describe('check if there are no additional enumerable keys', function () {
        it('has no additional enumerable keys', function () {
            const obi = {a: 'one', b: 'two', c: 'three'};
            let enumerables = [];
            for(let o in obi) {
                enumerables.push(o);
            }
            expect(Object.keys(obi)).toEqual(enumerables);
        });
    });
});