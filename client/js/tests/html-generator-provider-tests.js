var assert = require("assert"),
    HtmlGeneratorProvider = require("../html-generators/html-generator-provider");

describe("Html generators: HtmlGeneratorProvider", function () {
    it("Initialize provider without parameters", function () {
        var p = new HtmlGeneratorProvider();

        assert.ok(p.getAllGenerators().arithmetic != undefined);
        assert.ok(p.getAllGenerators().matrix != undefined);
    });
});