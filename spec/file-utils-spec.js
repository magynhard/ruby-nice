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