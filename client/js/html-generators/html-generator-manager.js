var HtmlGeneratorProvider = require("./html-generator-provider");

function HtmlGeneratorManager(htmlGenerators) {
    if (htmlGenerators == undefined) {
        htmlGenerators = (new HtmlGeneratorProvider()).getAllGenerators();
    }

    return {
        renderTask: function (task) {
            var generator = htmlGenerators[task.type];
            return generator.renderTask(task);
        },
        renderTaskWithCorrectAnswer: function (task) {
            var generator = htmlGenerators[task.type];
            return generator.renderTaskWithCorrectAnswer(task);
        }
    }
}

module.exports = HtmlGeneratorManager;