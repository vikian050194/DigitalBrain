var assert = require("assert"),
    TaskGeneratorProvider = require("../task-generators/task-generator-provider");

describe("Task generators: DataGeneratorProvider", function () {
    it("Initialize provider without parameters", function () {
        var p = new TaskGeneratorProvider();

        assert.ok(p.getAllGenerators().arithmetic != undefined);
        assert.ok(p.getAllGenerators().matrix != undefined);
    });
});