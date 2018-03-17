var assert = require('assert'),
    ArithmeticTaskGenerator = require('../tasks-generators/arithmetic-task-generator'),
    TestIntegerGenerator = require('../data-generators/test-integer-generator');

describe('Arithmetic tasks', function () {
    it('Generate 2 tasks for addition', function () {
        var level = 0,
            operation = '+',
            randomValues = [1, 2, 5, 7],
            g = new TestIntegerGenerator(randomValues),
            a = new ArithmeticTaskGenerator(g);

        assert.deepEqual(a.next(operation, level), { a: randomValues[0], b: randomValues[1], result: 3, operation });
        assert.deepEqual(a.next(operation, level), { a: randomValues[2], b: randomValues[3], result: 12, operation });
    });

    it('Generate 2 tasks for substitution', function () {
        var level = 0,
            operation = '-',
            randomValues = [1, 2, 7, 5],
            g = new TestIntegerGenerator(randomValues),
            a = new ArithmeticTaskGenerator(g);

        assert.deepEqual(a.next(operation, level), { a: randomValues[0], b: randomValues[1], result: -1, operation });
        assert.deepEqual(a.next(operation, level), { a: randomValues[2], b: randomValues[3], result: 2, operation });
    });
});