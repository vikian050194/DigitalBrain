var express = require("express"),
    router = express.Router(),
    path = require("path"),
    TaskGeneratorManager = require("./task-generators/task-generator-manager"),
    Settings = require("./task-generators/settings");

var taskGeneratorManager = new TaskGeneratorManager();

if (process.env.NODE_ENV === "production") {
    router.route("/")
        .get(function (req, res) {
            res.sendFile(path.resolve(__dirname + "/../client/build/index.html"));
        });
}

router.route("/api/menu")
    .get(function (req, res) {
        setTimeout(function(){
            res.send(taskGeneratorManager.getFullInfo());
        }, 1000);
    });

router.route("/api/game")
    .post(function (req, res) {
        var taskType = req.body.taskType,
            operations = req.body.operations,
            level = parseInt(req.body.level),
            count = parseInt(req.body.count),
            settings = Settings(taskType, operations, level, count),
            tasks = taskGeneratorManager.getTasks(settings);

        res.send(tasks);
    });

router.route("/*")
    .get(function (req, res) {
        res.sendFile(path.resolve(__dirname + "/../client/build/index.html"));
    });

router.route("*")
    .all(function (req, res) {
        res.sendStatus(404);
    });

module.exports = router;