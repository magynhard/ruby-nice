
var File = require('./../src/ruby-nice/file.js');
const Os = require("os");

describe('File', function () {
    beforeEach(function () {
    });
    describe('getAbsolutePath()', function () {
        it('get absolute path without dir_string', function () {
            const tmp_dir = Os.tmpdir();
            process.chdir(tmp_dir);
            expect(File.getAbsolutePath(File.expandPath('/user/document1.txt'))).toEqual(File.expandPath(tmp_dir) + File.expandPath('/user/document1.txt'));
        });
        it('get absolute path with dir_string', function () {
            expect(File.getAbsolutePath(File.expandPath('/user/document2.txt'), File.expandPath('/home'))).toEqual(File.expandPath('/home/user/document2.txt'));
        });
    });
});


describe('File', function () {
    beforeEach(function () {
    });
    describe('getBasename()', function () {
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
    describe('getDirname()', function () {
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
    describe('getSize()', function () {
        it('gets the size of a file', function () {
            expect(File.getSize(__dirname + '/test_files/24_bytes_file.txt')).toEqual(24);
        });
    });
});


describe('File', function () {
    beforeEach(function () {
    });
    describe('isEmpty()', function () {
        it('checks a file for empty that does not exist', function () {
            expect(File.isEmpty(__dirname + '/test_files/does_not_exist.txt')).toEqual(false);
        });
        it('checks a file for empty that is not empty', function () {
            expect(File.isEmpty(__dirname + '/test_files/sample.txt')).toEqual(false);
        });
        it('checks a file that is empty', function () {
            expect(File.isEmpty(__dirname + '/test_files/empty.txt')).toEqual(true);
        });
    });
});


describe('File', function () {
    beforeEach(function () {
    });
    describe('isExisting()', function () {
        it('detects an existing file', function () {
            expect(File.isExisting(__dirname + '/test_files/sample.txt')).toEqual(true);
        });
        it('detects a not existing file', function () {
            expect(File.isExisting(__dirname + '/test_files/not_existing_sample.txt')).toEqual(false);
        });
    });
});



describe('File', function () {
    beforeEach(function () {
    });
    describe('expandPath()', function () {

        function getAbsoluteHomeDir() {
            if(process.env.HOME) {
                return process.env.HOME;
            } else if(process.env.HOMEPATH && process.env.HOMEDRIVE) {
                return process.env.HOMEDRIVE + process.env.HOMEPATH;
            } else if(process.env.USERPROFILE) {
                return process.env.USERPROFILE;
            } else {
                throw new Error(`Cannot detect home dir. Your operating system may be not supported.`);
            }
        }

        it('gets the users home path', function () {
            expect(File.getHomePath()).toEqual(getAbsoluteHomeDir().replace(/\\/g,'/'));
        });
        it('expands a path', function () {
            expect(File.expandPath('test/suppe').replace(/\\/g,'/')).toEqual(process.cwd().replace(/\\/g,'/') + '/test/suppe');
        });
        it('expands a path with double dots', function () {
            expect(File.expandPath('test/suppe/..').replace(/\\/g,'/')).toEqual(process.cwd().replace(/\\/g,'/') + '/test');
        });
        it('expands a path beginning at root', function () {
            expect(File.expandPath('/test/super').replace(/\\/g,'/')).toEqual(`${process.env.HOMEDRIVE ? process.env.HOMEDRIVE : ''}/test/super`);
        });
        it('expands a path ending with slash at root', function () {
            expect(File.expandPath('test/super/').replace(/\\/g,'/')).toEqual(process.cwd().replace(/\\/g,'/') + '/test/super');
        });
        it('expands a path with home tilde', function () {
            expect(File.expandPath('~/super/').replace(/\\/g,'/')).toEqual(getAbsoluteHomeDir().replace(/\\/g,'/') + '/super');
        });
        it('expands a path with home tilde of specific user', function () {
            expect(File.expandPath('~other/super/').replace(/\\/g,'/')).toEqual(File.getDirname(File.getHomePath()) + '/other/super');
        });
        it('expands a path with home tilde in start dir', function () {
            expect(File.expandPath('super/','~/bad').replace(/\\/g,'/')).toEqual(File.getHomePath() + '/bad/super');
        });
        it('expands a path with home tilde in path and start dir', function () {
            expect(File.expandPath('~/super/','~/bad').replace(/\\/g,'/')).toEqual(File.getHomePath() + '/super');
        });
    });
});



describe('File', function () {
    beforeEach(function () {
    });
    describe('read()', function () {
        it('reads contents of a file', function () {
            expect(File.read(__dirname + '/test_files/sample.txt')).toContain("Here is some text");
        });
    });
});



describe('File', function () {
    beforeEach(function () {
    });
    describe('join()', function () {
        it('joins path segments together', function () {
            expect(File.join('/some', 'path', 'to', 'a', 'file.txt')).toEqual('/some/path/to/a/file.txt');
            expect(File.join('/some/', '/path/', '/to/', '/a/', '/file.txt')).toEqual('/some/path/to/a/file.txt');
            expect(File.join('some/', '/path/', '/to/', '/a/', '/file.txt')).toEqual('some/path/to/a/file.txt');
            expect(File.join('some', 'path', 'to', 'a', 'file.txt')).toEqual('some/path/to/a/file.txt');
            expect(File.join('some\\', '\\path\\', '\\to\\', '\\a\\', '\\file.txt')).toEqual('some/path/to/a/file.txt');
            expect(File.join('some\\', '/path/', '\\to\\', '/a/', '\\file.txt')).toEqual('some/path/to/a/file.txt');
            expect(File.join('some', '', 'path', '', 'to', '', 'a', '', 'file.txt')).toEqual('some/path/to/a/file.txt');
        });
    });
});