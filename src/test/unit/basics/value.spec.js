/* jshint -W117, -W030 */
describe('Basics - value:', function() {
    'use strict';

    beforeEach(module('basics'));

    // The first use of inject
    // closes the module cookbook to further modification
    it('config.apiBaseUri has expected original value',
        inject(function(config) {
            expect(config.apiBaseUri).to.equal('/api/marvel/');
        })
    );

    // QUESTION FOR YOU: Is this component really worth testing?

});
