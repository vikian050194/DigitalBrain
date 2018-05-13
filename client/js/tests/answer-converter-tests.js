var assert = require("assert"),
    AnswerConverter = require("../input-generators/answer-converter");

describe("Input generators: AnswerConverter", function () {
    it("Initialize converter without parameters", function () {
        var c = new AnswerConverter();

        assert.ok(c.convert != undefined);
    });

    it("Initialize converter with parameters", function () {
        var c = new AnswerConverter({});

        assert.ok(c.convert != undefined);
    });

    it("Convert to inline", function () {
        var c = new AnswerConverter();
        var answer = ["test"],
            task = {
                type: "arithmetic",
                operation: "a"
            };

        assert.equal(c.convert(task, answer), "test");
    });

    it("Convert to matrix", function () {
        var c = new AnswerConverter();
        var answer = ["3", "14", "15", "9"],
            task = {
                type: "matrix",
                operation: "a",
                a: ["",""]
            };

        assert.deepEqual(c.convert(task, answer), [["3","14"],["15","9"]]);
    });
});