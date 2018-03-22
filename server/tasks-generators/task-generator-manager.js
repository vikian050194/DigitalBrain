function TaskGeneratorManager(tasksGenerators, dataGenerators) {
    var info = [];
    var integerGenerator = dataGenerators.integerGenerator;

    for (var prop in tasksGenerators) {
        if (tasksGenerators.hasOwnProperty(prop)) {
            info.push({
                id: prop,
                title: tasksGenerators[prop].title,
                description: tasksGenerators[prop].description,
                operations: tasksGenerators[prop].operations
            });
        }
    }

    return {
        getTasks: function (settings) {
            var generator = tasksGenerators[settings.taskType];
            var result = [];

            for (var i = 0; i < settings.count; i++) {
                var operationIndex = 0;

                if (settings.operations.length > 1) {
                    operationIndex = integerGenerator.next(0, settings.operations.length - 1);
                }

                var newTask = generator.next(settings.operations[operationIndex], settings.level);
                result.push(newTask);
            }

            return result;
        },
        getTasksGeneratorsInfo: () => info
    }
}

module.exports = TaskGeneratorManager;