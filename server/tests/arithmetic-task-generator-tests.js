var assert = require('assert'),
    ArithmeticTaskGenerator = require('../tasks-generators/arithmetic-task-generator'),
    { TestIntegerGenerator } = require('../data-generators/integer-generator');

describe('Arithmetic tasks', function () {
    it('Generate 2 tasks', function () {
        var min = 1,
            max = 9,
            operation = '+',
            randomValues = [1, 2, 5, 7],
            g = new TestIntegerGenerator(randomValues),
            a = new ArithmeticTaskGenerator(g);

        assert.deepEqual(a.next(operation, min, max), { a: randomValues[0], b: randomValues[1], result: 3, operation });
        assert.deepEqual(a.next(operation, min, max), { a: randomValues[2], b: randomValues[3], result: 12, operation });
    });
});