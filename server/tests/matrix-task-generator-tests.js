var assert = require("assert"),
    MatrixTaskGenerator = require("../task-generators/matrix-task-generator"),
    TestIntegerGenerator = require("./fakes/test-integer-generator");

const type = "matrix";

describe("Matrix tasks", function () {
    it("Generate 1 task for addition", function () {
        var level = 0,
            operation = "a",
            randomValues = [1, 2, 3, 4, 5, 6, 7, 8],
            g = new TestIntegerGenerator(randomValues),
            a = new MatrixTaskGenerator(g);

        assert.deepEqual(a.next(operation, level), {
            a: [["1", "2"], ["3", "4"]],
            b: [["5", "6"], ["7", "8"]],
            result: [["6", "8"], ["10", "12"]],
            operation,
            type
        });
    });

    it("Generate 1 task for addition", function () {
        var level = 0,
            operation = "s",
            randomValues = [5, 2, 7, 9, 1, 6, 0, 8],
            g = new TestIntegerGenerator(randomValues),
            a = new MatrixTaskGenerator(g);

        assert.deepEqual(a.next(operation, level), {
            a: [["5", "2"], ["7", "9"]],
            b: [["1", "6"], ["0", "8"]],
            result: [["4", "-4"], ["7", "1"]],
            operation,
            type
        });
    });
});