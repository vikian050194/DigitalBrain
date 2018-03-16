function TaskGeneratorManager(tasksGenerators) {
    var info = [];

    for(var prop in tasksGenerators){
        if(tasksGenerators.hasOwnProperty(prop)){
            info.push({
                id: prop,
                title: tasksGenerators[prop].title,
                description: tasksGenerators[prop].description
            });
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
        getTasksGeneratorsInfo: () => info           
    }
}

module.exports = TaskGeneratorManager;