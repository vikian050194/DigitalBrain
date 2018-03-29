function TaskGeneratorManager(tasksGenerators, dataGenerators) {
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
        getFullInfo: function(id){
            if(id == undefined){
                return fullInfo;
            } else{
                return fullInfo[id];
            }
        }
    }
}

module.exports = TaskGeneratorManager;