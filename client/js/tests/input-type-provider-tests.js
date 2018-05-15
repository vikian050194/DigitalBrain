var assert = require("assert"),
    InputTypeProvider = require("../input-generators/input-type-provider");

describe("Input generators: InputTypeProvider", function () {
    it("Initialize provider without parameters", function () {
        var p = new InputTypeProvider();

        assert.ok(p.getInputTypeByTask != undefined);
    });

    it("Get input type for arithmetic task", function () {
        var task = {
            type: "arithmetic",
            operation: "a"
        },
            expected = "inline",
            p = new InputTypeProvider();

        assert.equal(p.getInputTypeByTask(task), expected);
    });

    it("Get input type for matrix task", function () {
        var task = {
            type: "matrix",
            operation: "a"
        },
            expected = "matrix",
            p = new InputTypeProvider();

        assert.equal(p.getInputTypeByTask(task), expected);
    });
});