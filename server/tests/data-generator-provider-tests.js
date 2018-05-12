var assert = require("assert"),
    DataGeneratorProvider = require("../data-generators/data-generator-provider");

describe("Data generators: DataGeneratorProvider", function () {
    it("Initialize provider without parameters", function () {
        var g = new DataGeneratorProvider();

        assert.ok(g.getAllGenerators().integerGenerator != undefined);
    });
});