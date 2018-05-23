var assert = require("assert"),
    ArithmeticTaskHtmlGenerator = require("../html-generators/arithmetic-task-html-generator");

describe("Html generators: ArithmeticTaskHtmlGenerator", function () {
    it("Render task", function () {
        var task = {
            operation: "a",
            a: 1,
            b: 2
        },
            g = new ArithmeticTaskHtmlGenerator(),
            html = g.renderTask(task);

        assert.ok(html.includes("1"));
        assert.ok(html.includes("2"));
        assert.ok(html.includes("+"));
    });

    it("Render task with correct answer - answer is correct", function () {
        var task = {
            operation: "a",
            a: 1,
            b: 2,
            result: 3
        },
            g = new ArithmeticTaskHtmlGenerator(),
            isCorrectAnswer = true,
            html = g.renderTaskWithCorrectAnswer(task, isCorrectAnswer);

        assert.ok(html.includes("1"));
        assert.ok(html.includes("2"));
        assert.ok(html.includes("3"));
        assert.ok(html.includes("+"));
        assert.ok(html.includes("="));
    });

    it("Render task with correct answer - answer is incorrect", function () {
        var task = {
            operation: "a",
            a: 1,
            b: 2,
            result: 3
        },
            answer = 4,
            g = new ArithmeticTaskHtmlGenerator(),
            isCorrectAnswer = false,
            html = g.renderTaskWithCorrectAnswer(task, isCorrectAnswer, answer);

        assert.ok(html.includes("1"));
        assert.ok(html.includes("2"));
        assert.ok(html.includes("3"));
        assert.ok(html.includes("4"));
        assert.ok(html.includes("+"));
        assert.ok(html.includes("="));
        assert.ok(html.includes("&ne;"));
    });
});