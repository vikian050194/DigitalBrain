var HtmlGeneratorProvider = require("./html-generator-provider");

function HtmlGeneratorManager(htmlGenerators) {
    if (htmlGenerators == undefined) {
        htmlGenerators = (new HtmlGeneratorProvider()).getAllGenerators();
    }

    return {
        renderTask: function (type, task) {
            var generator = htmlGenerators[type];
            return generator.renderTask(task);
        },
        renderTaskWithCorrectAnswer: function (type, task) {
            var generator = htmlGenerators[type];
            return generator.renderTaskWithCorrectAnswer(task);
        }
    }
}

module.exports = HtmlGeneratorManager;