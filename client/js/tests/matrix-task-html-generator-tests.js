var assert = require("assert"),
    MatrixTaskHtmlGenerator = require("../html-generators/matrix-task-html-generator");

describe("Html generators: MatrixTaskHtmlGenerator", function () {
    it("Render task", function () {
        var task = {
            operation: "a",
            a: [[1, 2], [3, 4]],
            b: [[5, 6], [7, 8]]
        },
            g = new MatrixTaskHtmlGenerator(),
            html = g.renderTask(task);

        for (var i = 1; i <= 8; i++) {
            assert.ok(html.includes(i));
        }

        assert.ok(html.includes("+"));
    });

    it("Render task with correct answer - answer is correct", function () {
        var task = {
            operation: "a",
            a: [[1, 2], [3, 4]],
            b: [[5, 6], [7, 8]],
            result: [[6, 8], [10, 12]]
        },
            g = new MatrixTaskHtmlGenerator(),
            isCorrectAnswer = true,
            html = g.renderTaskWithCorrectAnswer(task, isCorrectAnswer);

        for (var i = 1; i <= 8; i++) {
            assert.ok(html.includes(i));
        }

        for (var i = 6; i <= 12; i += 2) {
            assert.ok(html.includes(i));
        }

        assert.ok(html.includes("+"));
        assert.ok(html.includes("="));
    });

    it("Render task with correct answer - answer is incorrect", function () {
        var task = {
            operation: "a",
            a: [[1, 2], [3, 4]],
            b: [[5, 6], [7, 8]],
            result: [[6, 8], [10, 12]]
        },
            answer = [[101, 102], [103, 104]],
            g = new MatrixTaskHtmlGenerator(),
            isCorrectAnswer = false,
            html = g.renderTaskWithCorrectAnswer(task, isCorrectAnswer, answer);

        for (var i = 1; i <= 8; i++) {
            assert.ok(html.includes(i));
        }

        for (var i = 101; i <= 104; i++) {
            assert.ok(html.includes(i));
        }

        assert.ok(html.includes("+"));
        assert.ok(html.includes("="));
        assert.ok(html.includes("&ne;"));
    });
});