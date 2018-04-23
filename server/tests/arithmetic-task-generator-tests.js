var assert = require("assert"),
    ArithmeticTaskGenerator = require("../tasks-generators/arithmetic-task-generator"),
    TestIntegerGenerator = require("../data-generators/test-integer-generator");

const type = "arithmetic";

describe("Arithmetic tasks", function () {
    it("Generate 2 tasks for addition", function () {
        var level = 0,
            operation = "a",
            randomValues = [0, 1, 2, 0, 5, 7],
            g = new TestIntegerGenerator(randomValues),
            a = new ArithmeticTaskGenerator(g);

        assert.deepEqual(a.next(operation, level), { a: 1, b: 2, result: 3, operation, type});
        assert.deepEqual(a.next(operation, level), { a: 5, b: 7, result: 12, operation, type});
    });

    it("Generate 2 tasks for substitution", function () {
        var level = 0,
            operation = "s",
            randomValues = [0, 1, 2, 0, 7, 5],
            g = new TestIntegerGenerator(randomValues),
            a = new ArithmeticTaskGenerator(g);

        assert.deepEqual(a.next(operation, level), { a: 1, b: 2, result: -1, operation, type});
        assert.deepEqual(a.next(operation, level), { a: 7, b: 5, result: 2, operation, type});
    });

    it("Generate 2 tasks for multiplication", function () {
        var level = 0,
            operation = "m",
            randomValues = [0, 2, 3, 0, 7, 5],
            g = new TestIntegerGenerator(randomValues),
            a = new ArithmeticTaskGenerator(g);

        assert.deepEqual(a.next(operation, level), { a: 2, b: 3, result: 6, operation, type});
        assert.deepEqual(a.next(operation, level), { a: 7, b: 5, result: 35, operation, type});
    });
});