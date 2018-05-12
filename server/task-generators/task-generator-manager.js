var TaskGeneratorProvider = require("./task-generator-provider"),
    DataGeneratorProvide = require("./../data-generators/data-generator-provider");

function TaskGeneratorManager(tasksGenerators, dataGenerators) {
    if (tasksGenerators == undefined) {
        tasksGenerators = (new TaskGeneratorProvider()).getAllGenerators();
    }

    if (dataGenerators == undefined) {
        dataGenerators = (new DataGeneratorProvide()).getAllGenerators();
    }

    var fullInfo = {};
    var integerGenerator = dataGenerators.integerGenerator;

    for (var prop in tasksGenerators) {
        if (tasksGenerators.hasOwnProperty(prop)) {
            fullInfo[prop] = {
                name: tasksGenerators[prop].name,
                description: tasksGenerators[prop].description,
                operations: tasksGenerators[prop].operations
            };
        }
    }

    return {
        getTasks: function (settings) {
            var generator = tasksGenerators[settings.taskType];
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
        getFullInfo: function (id) {
            if (id == undefined) {
                return fullInfo;
            } else {
                return fullInfo[id];
            }
        }
    }
}

module.exports = TaskGeneratorManager;