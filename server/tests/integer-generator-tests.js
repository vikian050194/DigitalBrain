var assert = require('assert'),
    IntegerGenerator = require('../generators/integer-generator');

describe('Generators', function () {
    it('Initialization without arguments', function () {
        var g = new IntegerGenerator();

        assert.equal(actual, undefined);
    });
    it('Initialization with 3 arguments', function () {
        var g = new IntegerGenerator([3, 14, 15]);
        
        assert.equal(g(), 3);
        assert.equal(g(), 14);
        assert.equal(g(), 15);
        assert.equal(g(), undefined);
    });
});