
var System = require('./../src/ruby-nice/system.js');

describe('System', function () {
    beforeEach(function () {
    });
    describe('run()', function () {
        it('gets the output of the command', function () {
            expect(System.run('echo "This is the output"')).toContain("This is the output");
        });
    });
});

describe('System', function () {
    beforeEach(function () {
    });
    describe('system()', function () {
        it('gets the return code of the command', function () {
            expect(System.system('echo "This is a command"')).toEqual(0);
        });
    });
});
