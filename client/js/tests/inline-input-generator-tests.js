var assert = require("assert"),
    InlineInputGenerator = require("../input-generators/inline-input-generator");

describe("Input generators: InlineInputGenerator", function () {
    it("Render input", function () {
        var g = new InlineInputGenerator(),
        input = g.renderInput();

        assert.ok(input.contains("input"));
        assert.ok(input.contains("iid"));
    });
});