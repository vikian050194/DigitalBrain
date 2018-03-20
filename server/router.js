var express = require('express'),
    router = express.Router(),
    fs = require('fs'),
    path = require('path'),
    IntegerGenerator = require('./data-generators/integer-generator'),
    DataGeneratorProvider = require('./data-generators/data-generator-provider'),
    TaskGeneratorProvider = require('./tasks-generators/task-generator-provider'),
    TaskGeneratorManager = require('./tasks-generators/task-generator-manager'),
    Settings = require('./tasks-generators/settings');

var dataGeneratorProvider = DataGeneratorProvider(),
    taskGeneratorProvider = TaskGeneratorProvider(dataGeneratorProvider.getAllGenerators()),
    taskGeneratorManager = TaskGeneratorManager(taskGeneratorProvider.getAllGenerators(), dataGeneratorProvider.getAllGenerators());

if (process.env.NODE_ENV === 'production') {
    router.route('/')
        .get(function (req, res) {
            res.sendFile(path.resolve(__dirname + '/../client/index.html'));
        });
}

router.route('/task')
    .get(function (req, res) {
        res.send(taskGeneratorManager.getTasksGeneratorsInfo());
    })
    .post(function (req, res) {
        var taskType = req.body.taskType,
            operations = req.body.operations,
            level = parseInt(req.body.level),
            count = parseInt(req.body.count),
            settings = Settings(taskType, operations, level, count),
            tasks = taskGeneratorManager.getTasks(settings);
        res.send(tasks);
    });

module.exports = router;