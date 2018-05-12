var assert = require("assert"),
    TaskGeneratorProvider = require("../task-generators/task-generator-provider");

describe("Task generators: DataGeneratorProvider", function () {
    it("Initialize provider without parameters", function () {
        var g = new TaskGeneratorProvider();

        assert.ok(g.getAllGenerators().arithmetic != undefined);
        assert.ok(g.getAllGenerators().matrix != undefined);
    });
});