var FileUtils = require('./../src/ruby-nice/file-utils.js');
var File = require('./../src/ruby-nice/file.js');
var FsExtra = require('fs-extra');

describe('FileUtils', function () {
    beforeEach(function () {
    });
    describe('mkdirP()', function () {
        it('creates one directory recursively', function () {
            const tmp_dir = File.expandPath(__dirname + '/../tmp');
            const new_path = tmp_dir + '/one/two/three';
            FsExtra.removeSync(new_path);
            expect(FsExtra.existsSync(new_path)).toEqual(false);
            FileUtils.mkdirP(new_path);
            expect(FsExtra.existsSync(new_path)).toEqual(true);
        });
        it('creates several directories recursively', function () {
            const tmp_dir = File.expandPath(__dirname + '/../tmp');
            const new_paths = [
                tmp_dir + '/one/two/three',
                tmp_dir + '/some/other',
                tmp_dir + '/more/than/i/thought'
            ];
            FsExtra.removeSync(new_paths[0]);
            FsExtra.removeSync(new_paths[1]);
            FsExtra.removeSync(new_paths[2]);
            expect(FsExtra.existsSync(new_paths[0])).toEqual(false);
            expect(FsExtra.existsSync(new_paths[1])).toEqual(false);
            expect(FsExtra.existsSync(new_paths[2])).toEqual(false);
            FileUtils.mkdirP(new_paths[0]);
            FileUtils.mkdirP(new_paths[1]);
            FileUtils.mkdirP(new_paths[2]);
            expect(FsExtra.existsSync(new_paths[0])).toEqual(true);
            expect(FsExtra.existsSync(new_paths[1])).toEqual(true);
            expect(FsExtra.existsSync(new_paths[2])).toEqual(true);
        });
    });
});

describe('FileUtils', function () {
    beforeEach(function () {
    });
    describe('rmRf()', function () {
        it('creates one directory recursively', function () {
            const tmp_dir = File.expandPath(__dirname + '/../tmp');
            const new_path = tmp_dir + '/one/two/three';
            FsExtra.removeSync(new_path);
            expect(FsExtra.existsSync(new_path)).toEqual(false);
            FileUtils.mkdirP(new_path);
            expect(FsExtra.existsSync(new_path)).toEqual(true);
        });
        it('creates several directories recursively', function () {
            const tmp_dir = File.expandPath(__dirname + '/../tmp');
            const new_paths = [
                tmp_dir + '/one/two/three',
                tmp_dir + '/some/other',
                tmp_dir + '/more/than/i/thought'
            ];
            FsExtra.removeSync(new_paths[0]);
            FsExtra.removeSync(new_paths[1]);
            FsExtra.removeSync(new_paths[2]);
            expect(FsExtra.existsSync(new_paths[0])).toEqual(false);
            expect(FsExtra.existsSync(new_paths[1])).toEqual(false);
            expect(FsExtra.existsSync(new_paths[2])).toEqual(false);
            FileUtils.mkdirP(new_paths[0]);
            FileUtils.mkdirP(new_paths[1]);
            FileUtils.mkdirP(new_paths[2]);
            expect(FsExtra.existsSync(new_paths[0])).toEqual(true);
            expect(FsExtra.existsSync(new_paths[1])).toEqual(true);
            expect(FsExtra.existsSync(new_paths[2])).toEqual(true);
        });
    });
});

describe('FileUtils', function () {
    beforeEach(function () {
    });
    describe('move()', function () {
        it('move a path', function () {
            const tmp_dir = File.expandPath(__dirname + '/../tmp');
            const new_folder = tmp_dir + '/some/folder';
            const rename_folder = tmp_dir + '/pute';
            FileUtils.mkdirP(new_folder);
            FileUtils.move(new_folder, rename_folder);
            expect(FsExtra.existsSync(rename_folder)).toEqual(true);
        });
        it('move a file', function () {
            const tmp_dir = File.expandPath(__dirname + '/../tmp');
            const new_file = tmp_dir + '/some/folder2/test.txt';
            const rename_folder = tmp_dir + '/pute2/salami.txt';
            FileUtils.mkdirP(File.getDirname(new_file));
            File.write(new_file, "some content");
            expect(FsExtra.existsSync(new_file)).toEqual(true);
            FileUtils.mkdirP(File.getDirname(rename_folder));
            FileUtils.move(new_file, rename_folder);
            expect(FsExtra.existsSync(rename_folder)).toEqual(true);
        });
    });
});

describe('FileUtils', function () {
    beforeEach(function () {
        const tmp_dir = File.expandPath(__dirname + '/../tmp');
        FileUtils.rmRf(tmp_dir);
        FileUtils.mkdirP(tmp_dir);
    });
    describe('copy()', function () {
        it('copy a file to dir', function () {
            const tmp_dir = File.expandPath(__dirname + '/../tmp');
            const src_file = File.expandPath(__dirname + '/test_files/sample.txt');
            const dest_folder = tmp_dir;
            FileUtils.copy(src_file, dest_folder);
            expect(FsExtra.existsSync(dest_folder + '/sample.txt')).toEqual(true);
        });
        it('copy a file to file', function () {
            const tmp_dir = File.expandPath(__dirname + '/../tmp');
            const src_file = File.expandPath(__dirname + '/test_files/sample.txt');
            const dest_file = tmp_dir + '/sample.txt';
            FileUtils.copy(src_file, dest_file);
            expect(FsExtra.existsSync(dest_file)).toEqual(true);
        });
        it('copy a array of files to dir', function () {
            const tmp_dir = File.expandPath(__dirname + '/../tmp');
            const src_files = [File.expandPath(__dirname + '/test_files/sample.txt'), File.expandPath(__dirname + '/test_files/empty.txt'), File.expandPath(__dirname + '/test_files/24_bytes_file.txt')];
            const dest_folder = tmp_dir;
            FileUtils.copy(src_files, dest_folder);
            expect(FsExtra.existsSync(dest_folder + '/sample.txt')).toEqual(true);
            expect(FsExtra.existsSync(dest_folder + '/empty.txt')).toEqual(true);
            expect(FsExtra.existsSync(dest_folder + '/24_bytes_file.txt')).toEqual(true);
        });
    });
});

describe('FileUtils', function () {
    beforeEach(function () {
        const tmp_dir = File.expandPath(__dirname + '/../tmp');
        FileUtils.rmRf(tmp_dir);
        FileUtils.mkdirP(tmp_dir);
    });
    describe('cp()', function () {
        it('copy a directory to parent dir target', function () {
            return;
            const tmp_dir = File.expandPath(__dirname + '/../tmp');
            const src_dir = File.expandPath(__dirname + '/test_files');
            const dest_folder = tmp_dir;
            FileUtils.copy(src_dir, dest_folder);
            expect(FsExtra.existsSync(dest_folder + '/test_files')).toEqual(true);
            expect(FsExtra.existsSync(dest_folder + '/test_files/sample.txt')).toEqual(true);
            expect(FsExtra.existsSync(dest_folder + '/test_files/empty.txt')).toEqual(true);
            expect(FsExtra.existsSync(dest_folder + '/test_files/24_bytes_file.txt')).toEqual(true);
        });
        it('copy a directory to same dir target', function () {
            return;
            const tmp_dir = File.expandPath(__dirname + '/../tmp');
            const src_dir = File.expandPath(__dirname + '/test_files');
            const dest_folder = tmp_dir + '/test_files';
            FileUtils.copy(src_dir, dest_folder);
            expect(FsExtra.existsSync(dest_folder + '/test_files')).toEqual(true);
            expect(FsExtra.existsSync(dest_folder + '/test_files/sample.txt')).toEqual(true);
            expect(FsExtra.existsSync(dest_folder + '/test_files/empty.txt')).toEqual(true);
            expect(FsExtra.existsSync(dest_folder + '/test_files/24_bytes_file.txt')).toEqual(true);
        });
    });
});