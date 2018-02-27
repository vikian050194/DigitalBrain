function TaskGeneratorManager(tasksGenerators) {
    var types = [];

    for(var prop in tasksGenerators){
        if(tasksGenerators.hasOwnProperty(prop)){
            types.push(prop);
        }
    }

    return {
        getTasks: function (settings) {
            var generator = tasksGenerators[settings.taskType];
            var result = [];

            for(var i = 0; i < settings.count; i++){
                var newTask = generator.next(settings.operation, settings.min, settings.max);
                result.push(newTask);
            }

            return result;
        },
        getTasksGeneratorsTypes: () => types           
    }
}

module.exports = TaskGeneratorManager;