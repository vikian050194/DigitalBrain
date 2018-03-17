var assert = require('assert'),
    TestIntegerGenerator = require('../data-generators/test-integer-generator'),
    TaskGeneratorManager = require('../tasks-generators/task-generator-manager'),
    TaskGeneratorProvider = require('../tasks-generators/task-generator-provider'),
    Settings = require('../tasks-generators/settings');

describe('Task generator manager: ', function () {
    it('Get tasks generators types', function () {
        var tasksGenerators = { g1: { title: 't1', description: 'd1' }, g2: { title: 't2', description: 'd2' } },
            taskGeneratorManager = TaskGeneratorManager(tasksGenerators),
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
            randomValues = [1, 2, 2, 4, 5, 7],
            testIntegerGenerator = TestIntegerGenerator(randomValues),
            taskGeneratorProvider = TaskGeneratorProvider({ integerGenerator: testIntegerGenerator }),
            taskGeneratorManager = TaskGeneratorManager(taskGeneratorProvider.getAllGenerators()),
            result = taskGeneratorManager.getTasks(settings);

        assert.equal(result.length, count);
        assert.deepEqual(result[0], { a: randomValues[0], b: randomValues[1], result: 3, operation: operations[0] });
        assert.deepEqual(result[1], { a: randomValues[2], b: randomValues[3], result: 6, operation: operations[0] });
        assert.deepEqual(result[2], { a: randomValues[4], b: randomValues[5], result: 12, operation: operations[0] });
    });

    it('Get 3 arithmetic tasks for two operations(add & sub)', function () {
        var taskType = 'arithmetic',
            operations = ['+', '-'],
            level = 0,
            count = 3,
            settings = new Settings(taskType, operations, level, count),
            randomValues = [1, 1, 2, 0, 2, 4, 1, 5, 7],
            testIntegerGenerator = TestIntegerGenerator(randomValues),
            taskGeneratorProvider = TaskGeneratorProvider({ integerGenerator: testIntegerGenerator }),
            taskGeneratorManager = TaskGeneratorManager(taskGeneratorProvider.getAllGenerators(), testIntegerGenerator),
            result = taskGeneratorManager.getTasks(settings);

        assert.equal(result.length, count);
        assert.deepEqual(result[0], { a: randomValues[1], b: randomValues[2], result: -1, operation: operations[1] });
        assert.deepEqual(result[1], { a: randomValues[4], b: randomValues[5], result: 6, operation: operations[0] });
        assert.deepEqual(result[2], { a: randomValues[7], b: randomValues[8], result: -2, operation: operations[1] });
    });
});