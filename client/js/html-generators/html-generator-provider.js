var ArithmeticTaskHtmlGenerator = require("./arithmetic-task-html-generator"),
    MatrixTaskHtmlGenerator = require("./matrix-task-html-generator");

function HtmlGeneratorProvider() {
    var generators = {
        arithmetic: ArithmeticTaskHtmlGenerator(),
        matrix: MatrixTaskHtmlGenerator()
    };

    return {
        getAllGenerators: function () {
            return generators
        }
    };
}

module.exports = HtmlGeneratorProvider;