/**
 * ESM (ECMA Script Module) wrapper for CJS (Common JS)
 */
import cRubyNice from '../ruby-nice/ruby-nice-class.js';

import cArrayPatch from '../ruby-nice/array.js';
import cObjectPatch from '../ruby-nice/object.js';
import cStringPatch from '../ruby-nice/string.js';
import cNumberPatch from '../ruby-nice/number.js';

import cDir from '../ruby-nice/dir.js';
import cEnv from '../ruby-nice/env.js';
import cFile from '../ruby-nice/file.js';
import cFileUtils from '../ruby-nice/file-utils.js';
import cSystem from '../ruby-nice/system.js';

export default cRubyNice;
export const RubyNice = cRubyNice;

export const Dir = cDir;
export const Env = cEnv;
export const File = cFile;
export const FileUtils = cFileUtils;
export const System = cSystem;