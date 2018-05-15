var express = require('express'),
    router = express.Router(),
    fs = require('fs'),
    path = require('path'),
    TaskGeneratorManager = require('./task-generators/task-generator-manager'),
    Settings = require('./task-generators/settings');

var taskGeneratorManager = new TaskGeneratorManager(dataGeneratorProvider.getAllGenerators(), taskGeneratorProvider.getAllGenerators());

if (process.env.NODE_ENV === 'production') {
    router.route('/')
        .get(function (req, res) {
            res.sendFile(path.resolve(__dirname + '/../client/index.html'));
        });
}

router.route('/task')
    .get(function (req, res) {
        res.send(taskGeneratorManager.getFullInfo());
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

    router.route('/task/:id/description')
    .get(function (req, res) {
        res.send(taskGeneratorManager.getFullInfo(req.params.id).description);
    });

module.exports = router;