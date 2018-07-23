import HtmlGeneratorProvider from "./html-generator-provider";

class HtmlGeneratorManager {
    constructor(htmlGenerators) {
        if (htmlGenerators == undefined) {
            this.htmlGenerators = (new HtmlGeneratorProvider()).getAllGenerators();
        }
        else {
            this.htmlGenerators = htmlGenerators;
        }
    }

    renderTask(task) {
        return this.htmlGenerators[task.type].renderTask(task);
    }

    renderTaskWithCorrectAnswer(task, isCorrectAnswer, answer) {
        return htmlGenerators[task.type].renderTaskWithCorrectAnswer(task, isCorrectAnswer, answer);
    }
}

export default HtmlGeneratorManager;