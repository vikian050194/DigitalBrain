var assert = require("assert"),
    InputGeneratorProvider = require("../input-generators/input-generator-provider");

describe("Input generators: InputGeneratorProvider", function () {
    it("Initialize provider without parameters", function () {
        var p = new InputGeneratorProvider();

        assert.ok(p.getAllGenerators().inline != undefined);
        assert.ok(p.getAllGenerators().matrix != undefined);
    });
});