
var File = require('./../src/ruby-nice/file.js');

describe('File', function () {
    beforeEach(function () {
    });
    describe('basename()', function () {
        it('extracts basename without suffix parameter', function () {
            expect(File.getBasename('/home/user/document1.txt')).toEqual('document1.txt');
        });
        it('extracts basename with matching suffix', function () {
            expect(File.getBasename('/home/user/document2.txt', '.txt')).toEqual('document2');
        });
        it('extracts basename without matching suffix', function () {
            expect(File.getBasename('/home/user/document3.txt', '.bmp')).toEqual('document3.txt');
        });
        it('extracts basename with matching suffix .*', function () {
            expect(File.getBasename('/home/user/document4.txt', '.*')).toEqual('document4');
        });
        // slash at the end
        it('extracts basename with matching suffix .* and ending slash', function () {
            expect(File.getBasename('/home/user/document4.txt/', '.*')).toEqual('document4');
        });
        it('extracts basename with matching suffix and ending slash', function () {
            expect(File.getBasename('/home/user/document2.txt/', '.txt')).toEqual('document2');
        });
        // slash at the end with space
        it('extracts basename with matching suffix .* and ending slash', function () {
            expect(File.getBasename('/home/user/document4.txt/ ', '.*')).toEqual(' ');
        });
        it('extracts basename with matching suffix and ending slash', function () {
            expect(File.getBasename('/home/user/document2.txt/ ', '.txt')).toEqual(' ');
        });
        // without file extension
        it('extracts basename without suffix parameter without file extension', function () {
            expect(File.getBasename('/home/user/document10')).toEqual('document10');
        });
        it('extracts basename with matching suffix without file extension', function () {
            expect(File.getBasename('/home/user/document20', '.txt')).toEqual('document20');
        });
        it('extracts basename without matching suffix without file extension', function () {
            expect(File.getBasename('/home/user/document30', '.bmp')).toEqual('document30');
        });
        it('extracts basename with matching suffix .* without file extension', function () {
            expect(File.getBasename('/home/user/document40', '.*')).toEqual('document40');
        });
    });
});



describe('File', function () {
    beforeEach(function () {
    });
    describe('dirname()', function () {
        it('extracts dirname when file with extension', function () {
            expect(File.getDirname('/home/user/document1.txt')).toEqual('/home/user');
        });
        it('extracts dirname when file without extension', function () {
            expect(File.getDirname('/home/user/document2')).toEqual('/home/user');
        });
        it('extracts dirname when ending slash', function () {
            expect(File.getDirname('/home/user/document3/')).toEqual('/home/user');
        });
        it('extracts dirname when ending slash and space', function () {
            expect(File.getDirname('/home/user/document4/ ')).toEqual('/home/user/document4');
        });
    });
});



describe('File', function () {
    beforeEach(function () {
    });
    describe('exist()', function () {
        it('detects an existing file', function () {
            expect(File.exist(__dirname + '/test_files/sample.txt')).toEqual(true);
        });
        it('detects a not existing file', function () {
            expect(File.exist(__dirname + '/test_files/not_existing_sample.txt')).toEqual(false);
        });
    });
});