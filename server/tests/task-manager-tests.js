var assert = require('assert'),
    TaskManager = require('../tasks/task-manager'),
    Settings = require('../tasks/settings'),
    { TestIntegerGenerator } = require('../generators/integer-generator');

describe('Task manager: ', function () {
    it('Get 3 arithmetic tasks, operation is addition', function () {
        var taskType = 'arithmetic',
            operation = '+',
            min = 1,
            max = 9,
            count = 3,
            settings = new Settings(taskType, operation, count, min, max),
            randomValues = [1, 2, 2, 4, 5, 7],
            g = new TestIntegerGenerator(randomValues),
            taskManager = new TaskManager({ integerGenerator: g }),
            result = taskManager.getTasks(settings);

        assert.equal(result.length, count);
        assert.deepEqual(result[0], { a: randomValues[0], b: randomValues[1], result: 3, operation });
        assert.deepEqual(result[1], { a: randomValues[2], b: randomValues[3], result: 6, operation });
        assert.deepEqual(result[2], { a: randomValues[4], b: randomValues[5], result: 12, operation });
    });
});