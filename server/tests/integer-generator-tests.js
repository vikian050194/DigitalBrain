var assert = require('assert'),
    { IntegerGenerator, TestIntegerGenerator } = require('../data-generators/integer-generator');

describe('Generators', function () {
    it('Test int gen: init without arguments and use', function () {
        var g = new TestIntegerGenerator();

        assert.equal(g.next(), undefined);
    });
    it('Test int gen: init with 3 arguments and use', function () {
        var g = new TestIntegerGenerator([3, 14, 15]);

        assert.equal(g.next(), 3);
        assert.equal(g.next(), 14);
        assert.equal(g.next(), 15);
        assert.equal(g.next(), undefined);
    });
    it('Real int gen: init and use 3 times', function () {
        var g = new IntegerGenerator();
        for (var i = 0; i < 10; i++) {
            var value = g.next(1, 9);
            var isNumberBelongToRange = value > 0 && value < 10;
            assert.equal(isNumberBelongToRange, true);
        }
    });
});