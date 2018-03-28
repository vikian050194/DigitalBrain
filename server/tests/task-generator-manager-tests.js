var assert = require('assert'),
    TestIntegerGenerator = require('../data-generators/test-integer-generator'),
    TaskGeneratorManager = require('../tasks-generators/task-generator-manager'),
    TaskGeneratorProvider = require('../tasks-generators/task-generator-provider'),
    Settings = require('../tasks-generators/settings');

describe('Task generator manager: ', function () {
    it('Get tasks generators types', function () {
        var tasksGenerators = { g1: { title: 't1', description: 'd1' }, g2: { title: 't2', description: 'd2' } },
            dataGenerators = { integerGenerator: {} },
            taskGeneratorManager = TaskGeneratorManager(tasksGenerators, dataGenerators),
            types = taskGeneratorManager.getTasksGeneratorsInfo();

        assert.equal(types.length, 2);
        assert.equal(types[0].id, 'g1');
        assert.equal(types[0].title, 't1');
        assert.equal(types[0].description, 'd1');
        assert.equal(types[1].id, 'g2');
        assert.equal(types[1].title, 't2');
        assert.equal(types[1].description, 'd2');
    });

    it('Get 3 arithmetic tasks for one operation(add)', function () {
        var taskType = 'arithmetic',
            operations = ['+'],
            level = 0,
            count = 3,
            settings = new Settings(taskType, operations, level, count),
            randomValues = [0, 1, 2, 0, 2, 4, 0, 5, 7],
            testIntegerGenerator = TestIntegerGenerator(randomValues),
            dataGenerators = { integerGenerator: testIntegerGenerator },
            taskGeneratorProvider = TaskGeneratorProvider(dataGenerators),
            taskGeneratorManager = TaskGeneratorManager(taskGeneratorProvider.getAllGenerators(), dataGenerators),
            result = taskGeneratorManager.getTasks(settings);

        assert.equal(result.length, count);
        assert.deepEqual(result[0], { a: 1, b: 2, result: 3, operation: operations[0] });
        assert.deepEqual(result[1], { a: 2, b: 4, result: 6, operation: operations[0] });
        assert.deepEqual(result[2], { a: 5, b: 7, result: 12, operation: operations[0] });
    });

    it('Get 3 arithmetic tasks for two operations(add & sub)', function () {
        var taskType = 'arithmetic',
            operations = ['+', '-'],
            level = 0,
            count = 3,
            settings = new Settings(taskType, operations, level, count),
            randomValues = [1, 0, 1, 2, 0, 0, 2, 4, 1, 0, 5, 7],
            testIntegerGenerator = TestIntegerGenerator(randomValues),
            dataGenerators = { integerGenerator: testIntegerGenerator },
            taskGeneratorProvider = TaskGeneratorProvider(dataGenerators),
            taskGeneratorManager = TaskGeneratorManager(taskGeneratorProvider.getAllGenerators(), dataGenerators),
            result = taskGeneratorManager.getTasks(settings);

        assert.equal(result.length, count);
        assert.deepEqual(result[0], { a: 1, b: 2, result: -1, operation: operations[1] });
        assert.deepEqual(result[1], { a: 2, b: 4, result: 6, operation: operations[0] });
        assert.deepEqual(result[2], { a: 5, b: 7, result: -2, operation: operations[1] });
    });
});