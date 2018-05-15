var assert = require("assert"),
    ArithmeticTaskGenerator = require("../task-generators/arithmetic-task-generator"),
    TestIntegerGenerator = require("./fakes/test-integer-generator");

const type = "arithmetic";

describe("Arithmetic tasks", function () {
    it("Swapping of parameters for random generation", function () {
        var level = 0,
            operation = "a",
            randomValues = [1, 1, 2],
            i = new TestIntegerGenerator(randomValues),
            g = new ArithmeticTaskGenerator(i);

        assert.deepEqual(g.next(operation, level), { a: 1, b: 2, result: 3, operation, type});
    });

    it("Generate 2 tasks for addition", function () {
        var level = 0,
            operation = "a",
            randomValues = [0, 1, 2, 0, 5, 7],
            i = new TestIntegerGenerator(randomValues),
            g = new ArithmeticTaskGenerator(i);

        assert.deepEqual(g.next(operation, level), { a: 1, b: 2, result: 3, operation, type});
        assert.deepEqual(g.next(operation, level), { a: 5, b: 7, result: 12, operation, type});
    });

    it("Generate 2 tasks for substitution", function () {
        var level = 0,
            operation = "s",
            randomValues = [0, 1, 2, 0, 7, 5],
            i = new TestIntegerGenerator(randomValues),
            g = new ArithmeticTaskGenerator(i);

        assert.deepEqual(g.next(operation, level), { a: 1, b: 2, result: -1, operation, type});
        assert.deepEqual(g.next(operation, level), { a: 7, b: 5, result: 2, operation, type});
    });

    it("Generate 2 tasks for multiplication", function () {
        var level = 0,
            operation = "m",
            randomValues = [0, 2, 3, 0, 7, 5],
            i = new TestIntegerGenerator(randomValues),
            g = new ArithmeticTaskGenerator(i);

        assert.deepEqual(g.next(operation, level), { a: 2, b: 3, result: 6, operation, type});
        assert.deepEqual(g.next(operation, level), { a: 7, b: 5, result: 35, operation, type});
    });
});