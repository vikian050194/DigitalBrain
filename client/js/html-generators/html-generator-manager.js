function HtmlGeneratorManager(htmlGenerators) {

    return {
        renderTask: function (settings) {
            var generator = tasksGenerators[settings.taskType];
            return generator.renderTask(settings.data);
        },
        renderTaskWithCorrectAnswer: function(settings){
            var generator = tasksGenerators[settings.taskType];
            return generator.renderTaskWithCorrectAnswer(settings.data);
        }
    }
}

module.exports = HtmlGeneratorManager;