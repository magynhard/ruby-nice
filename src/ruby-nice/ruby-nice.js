//<!-- MODULE -->//
if (typeof module !== 'undefined' && module.exports) {
    var RubyNice = require('./ruby-nice-class');
    // include all monkey patches
    require('./array');
    require('./object');
    require('./string');
    require('./number');
    module.exports = RubyNice;
    // reassign workaround for default require (backward compatibility)
    exports = module.exports;
    exports.RubyNice = RubyNice;
    exports.Dir = require('./dir');
    exports.Env = require('./env');
    exports.File = require('./file');
    exports.FileUtils = require('./file-utils');
    exports.System = require('./system');
}
//<!-- /MODULE -->//