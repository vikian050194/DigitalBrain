import ArithmeticTaskHtmlGenerator from "./arithmetic-task-html-generator";
import MatrixTaskHtmlGenerator from "./matrix-task-html-generator";

class HtmlGeneratorProvider {
    constructor() {
        this.generators = {
            arithmetic: ArithmeticTaskHtmlGenerator(),
            matrix: MatrixTaskHtmlGenerator()
        };
    }

    getAllGenerators() {
        return generators;
    }
}

module.exports = HtmlGeneratorProvider;