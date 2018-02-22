var ArithmeticTask = require('./arithmetic-task');

function TaskManager(generators) {
    var tasks = {arithmetic : new ArithmeticTask(generators.integerGenerator)}

    return {
        getTasks: function (settings) {
            var task = tasks[settings.taskType];
            var result = [];

            for(var i = 0; i < settings.count; i++){
                var newTask = task.next(settings.operation, settings.min, settings.max);
                result.push(newTask);
            }

            return result;
        }
    }
}

module.exports = TaskManager;