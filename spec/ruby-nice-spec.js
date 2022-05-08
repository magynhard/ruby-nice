const RubyNice = require('../src/ruby-nice/ruby-nice.js');

//----------------------------------------------------------------------------------------------------

describe('RubyNice', function () {
    beforeEach(function () {
    });
    it('can return a version', function () {
        expect(RubyNice.getVersion()).toContain('.');
    });
});

//----------------------------------------------------------------------------------------------------