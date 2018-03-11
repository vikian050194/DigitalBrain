var express = require('express'),
    router = express.Router(),
    fs = require('fs'),
    path = require('path'),
    Foo = require('./data-generators/data-generator-provider'),
    Bar = require('./tasks-generators/task-generator-provider'),
    Baz = require('./tasks-generators/task-generator-manager'),
    Settings = require('./tasks-generators/settings');

var foo = Foo(),
    bar = Bar(foo.getAllGenerators()),
    baz = Baz(bar.getAllGenerators());

if (process.env.NODE_ENV === 'production') {
    router.route('/')
        .get(function (req, res) {
            res.sendFile(path.resolve(__dirname + '/../client/index.html'));
        });
}

router.route('/task')
    .get(function (req, res) {
        res.send(baz.getTasksGeneratorsTypes());
    })
    .post(function (req, res) {
        var settings = Settings('arithmetic', '+', 1, 1, 9);
        res.send(baz.getTasks(settings));
    });

module.exports = router;