var assert = require("assert"),
    AnswerConverter = require("../input-generators/answer-converter");

describe("Input generators: AnswerConverter", function () {
    it("Initialize converter without parameters", function () {
        var c = new AnswerConverter();

        assert.ok(c.convert != undefined);
    });
});