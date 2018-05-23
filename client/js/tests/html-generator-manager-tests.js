var assert = require("assert"),
    HtmlGeneratorManager = require("../html-generators/html-generator-manager");

describe("Html generators: HtmlGeneratorManager", function () {
    it("Initialize manager without parameters", function () {
        var m = new HtmlGeneratorManager();

        assert.ok(m.renderTask != undefined);
        assert.ok(m.renderTaskWithCorrectAnswer != undefined);
    });

    it("Render task", function () {
        var type = "testType",
            expected = "testHTML",
            htmlGenerators = {
                testType: {
                    renderTask: function () {
                        return expected;
                    }
                }
            },
            task = { type },
            m = new HtmlGeneratorManager(htmlGenerators),
            actual = m.renderTask(task);

        assert.equal(actual, expected);
    });

    it("Render task with correct answer", function () {
        var type = "testType",
            expected = "testHTML",
            htmlGenerators = {
                testType: {
                    renderTaskWithCorrectAnswer: function () {
                        return expected;
                    }
                }
            },
            task = { type },
            m = new HtmlGeneratorManager(htmlGenerators),
            actual = m.renderTaskWithCorrectAnswer(task);

        assert.equal(actual, expected);
    });
});