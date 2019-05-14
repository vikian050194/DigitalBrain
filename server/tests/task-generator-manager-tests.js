var assert = require("assert"),
    TestIntegerGenerator = require("./fakes/test-integer-generator"),
    TaskGeneratorManager = require("../task-generators/task-generator-manager"),
    TaskGeneratorProvider = require("../task-generators/task-generator-provider"),
    Settings = require("../task-generators/settings");

describe("Task generators: TaskGeneratorManager", function () {
    it("Init task generator manager without arguments", function () {
        var taskGeneratorManager = new TaskGeneratorManager(),
            data = taskGeneratorManager.getFullInfo();

        assert.equal(data.tasks.length, 2);
        assert.equal(data.tasks[0].id, "arithmetic");
        assert.equal(data.tasks[1].id, "matrix");
        assert.ok(data.sizes != null);
        assert.ok(data.levels != null);
    });

    it("Get tasks generators types", function () {
        var taskGenerators = {
                g1: {
                    name: "n1",
                    description: "d1",
                    operations: ["op1"]
                },
                g2: {
                    name: "n2",
                    description: "d2",
                    operations: ["op2"]
                }
            },
            dataGenerators = { integerGenerator: {} },
            taskGeneratorManager = new TaskGeneratorManager(dataGenerators, taskGenerators),
            data = taskGeneratorManager.getFullInfo();

        assert.equal(data.tasks.length, 2);

        assert.equal(data.tasks[0].id, "g1");
        assert.deepEqual(data.tasks[0], { id: "g1", name: "n1", description: "d1", operations: ["op1"] });

        assert.equal(data.tasks[1].id, "g2");
        assert.deepEqual(data.tasks[1], { id: "g2", name: "n2", description: "d2", operations: ["op2"] });
    });

    it("Get 3 arithmetic tasks for one operation(add)", function () {
        var taskType = "arithmetic",
            operations = ["a"],
            level = 0,
            count = 3,
            settings = new Settings(taskType, operations, level, count),
            randomValues = [0, 1, 2, 0, 2, 4, 0, 5, 7],
            testIntegerGenerator = TestIntegerGenerator(randomValues),
            dataGenerators = { integerGenerator: testIntegerGenerator },
            taskGeneratorProvider = new TaskGeneratorProvider(dataGenerators),
            taskGeneratorManager = new TaskGeneratorManager(dataGenerators, taskGeneratorProvider.getAllGenerators()),
            result = taskGeneratorManager.getTasks(settings);

        assert.equal(result.length, count);
        assert.deepEqual(result[0], { a: 1, b: 2, result: 3, operation: operations[0], type: taskType });
        assert.deepEqual(result[1], { a: 2, b: 4, result: 6, operation: operations[0], type: taskType });
        assert.deepEqual(result[2], { a: 5, b: 7, result: 12, operation: operations[0], type: taskType });
    });

    it("Get 3 arithmetic tasks for two operations(add & sub)", function () {
        var taskType = "arithmetic",
            operations = ["a", "s"],
            level = 0,
            count = 3,
            settings = new Settings(taskType, operations, level, count),
            randomValues = [1, 0, 1, 2, 0, 0, 2, 4, 1, 0, 5, 7],
            testIntegerGenerator = TestIntegerGenerator(randomValues),
            dataGenerators = { integerGenerator: testIntegerGenerator },
            taskGeneratorProvider = new TaskGeneratorProvider(dataGenerators),
            taskGeneratorManager = new TaskGeneratorManager(dataGenerators, taskGeneratorProvider.getAllGenerators()),
            result = taskGeneratorManager.getTasks(settings);

        assert.equal(result.length, count);
        assert.deepEqual(result[0], { a: 1, b: 2, result: -1, operation: operations[1], type: taskType });
        assert.deepEqual(result[1], { a: 2, b: 4, result: 6, operation: operations[0], type: taskType });
        assert.deepEqual(result[2], { a: 5, b: 7, result: -2, operation: operations[1], type: taskType });
    });

    it("Generate task with result equal to one of arguments", function () {
        var taskType = "arithmetic",
            operations = ["a"],
            level = 0,
            count = 1,
            settings = new Settings(taskType, operations, level, count),
            randomValues = [0, 1, 0, 1, 2],
            testIntegerGenerator = TestIntegerGenerator(randomValues),
            dataGenerators = { integerGenerator: testIntegerGenerator },
            taskGeneratorProvider = new TaskGeneratorProvider(dataGenerators),
            taskGeneratorManager = new TaskGeneratorManager(dataGenerators, taskGeneratorProvider.getAllGenerators()),
            result = taskGeneratorManager.getTasks(settings);

        assert.equal(result.length, count);
        assert.deepEqual(result[0], { a: 1, b: 2, result: 3, operation: operations[0], type: taskType });
    });

    it("Generate task with answer equal to answer of previous task", function () {
        var taskType = "arithmetic",
            operations = ["a"],
            level = 0,
            count = 2,
            settings = new Settings(taskType, operations, level, count),
            randomValues = [0, 1, 2, 0, 1, 2, 0, 4, 5],
            testIntegerGenerator = TestIntegerGenerator(randomValues),
            dataGenerators = { integerGenerator: testIntegerGenerator },
            taskGeneratorProvider = new TaskGeneratorProvider(dataGenerators),
            taskGeneratorManager = new TaskGeneratorManager(dataGenerators, taskGeneratorProvider.getAllGenerators()),
            result = taskGeneratorManager.getTasks(settings);

        assert.equal(result.length, count);
        assert.deepEqual(result[0], { a: 1, b: 2, result: 3, operation: operations[0], type: taskType });
        assert.deepEqual(result[1], { a: 4, b: 5, result: 9, operation: operations[0], type: taskType });
    });
});