var assert = require("assert"),
    DataGeneratorProvider = require("../data-generators/data-generator-provider");

describe("Data generators: DataGeneratorProvider", function () {
    it("Initialize provider without parameters", function () {
        var p = new DataGeneratorProvider();

        assert.ok(p.getAllGenerators().integerGenerator != undefined);
    });
});