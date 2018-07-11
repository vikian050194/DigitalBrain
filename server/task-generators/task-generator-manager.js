var TaskGeneratorProvider = require("./task-generator-provider"),
    DataGeneratorProvide = require("./../data-generators/data-generator-provider"),
    Levels = require("./../enums/levels"),
    Sizes = require("./../enums/sizes");

function TaskGeneratorManager(dataGenerators, taskGenerators) {
    if (dataGenerators == undefined) {
        dataGenerators = (new DataGeneratorProvide()).getAllGenerators();
    }

    if (taskGenerators == undefined) {
        taskGenerators = (new TaskGeneratorProvider()).getAllGenerators();
    }

    var fullInfo = {
        tasks: [],
        levels: Levels,
        sizes: Sizes
    },
        integerGenerator = dataGenerators.integerGenerator,
        tasks = Object.getOwnPropertyNames(taskGenerators);

    for (var i in tasks) {
        var task = tasks[i];

        fullInfo.tasks.push({
            id: task,
            name: taskGenerators[task].name,
            description: taskGenerators[task].description,
            operations: taskGenerators[task].operations
        });
    }

    return {
        getTasks: function (settings) {
            var generator = taskGenerators[settings.taskType];
            var tasks = [];

            for (var i = 0; i < settings.count; i++) {
                var operationIndex = 0;

                if (settings.operations.length > 1) {
                    operationIndex = integerGenerator.next(0, settings.operations.length - 1);
                }

                var newTask = null;

                do {
                    newTask = generator.next(settings.operations[operationIndex], settings.level)
                } while (i != 0 && newTask.result == tasks[i - 1].result)

                tasks.push(newTask);
            }

            return tasks;
        },
        getFullInfo: function () {
            return fullInfo;
        }
    }
}

module.exports = TaskGeneratorManager;