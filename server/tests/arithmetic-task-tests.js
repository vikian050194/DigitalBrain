var assert = require('assert'),
    ArithmeticTask = require('../tasks/arithmetic-task'),
    { TestIntegerGenerator } = require('../generators/integer-generator');

describe('Arithmetic task', function () {
    it('Addition', function () {
        var min = 1,
            max = 9,
            operation = '+',
            randomValues = [1, 2, 5, 7],
            g = new TestIntegerGenerator(randomValues),
            a = new ArithmeticTask(g);

        assert.deepEqual(a.next(operation, min, max), { a: randomValues[0], b: randomValues[1], result: 3, operation });
        assert.deepEqual(a.next(operation, min, max), { a: randomValues[2], b: randomValues[3], result: 12, operation });
    });
});