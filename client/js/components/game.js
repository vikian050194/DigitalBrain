// var Game = Backbone.Model.extend({
//     url: "/api/game",
// });

// export default Game;

// import { Backbone } from "backbone";
// import { AnswerConverter } from "./input-generators/answer-converter";
// var d = $(document),
//     answerConverter = new AnswerConverter();

// var MainModel = Backbone.Model.extend({});

// var brainUI = new BrainUI();

// $.ajaxSetup({
//     cache: false,
//     beforeSend: brainUI.showLoader,
//     complete: brainUI.showLoader
// });

// var fullInfo = {},
//     state = {
//         tasks: [],
//         score: 0,
//         index: 0,
//         answers: [],
//         settings: {
//             taskType: "",
//             operations: [],
//             level: 0,
//             count: 5
//         }
//     };

// $.ajax({
//     type: "GET",
//     url: "/task",
//     success: function (r) {
//         fullInfo = r;
//         brainUI.updateTasks(r);
//     }
// });

// var counts = [5, 10, 15, 20];
// brainUI.updateCounts(counts);

// var levels = [
//     ];
// brainUI.updateLevels(levels);

// d.on("update:description", function (jqe, id) {
//     brainUI.updateDescription(fullInfo[id].description);
// });

// d.on("update:operations", function (jqe, id) {
//     brainUI.updateOperations(fullInfo[id].operations);
// });

// function startGame() {
//     brainUI.reset();

//     state.score = 0;
//     state.index = 0;
//     state.answers = [];

//     $.ajax({
//         type: "POST",
//         url: "/task",
//         data: state.settings,
//         success: function (result) {
//             state.tasks = result;

//             brainUI.updateScore(state.score, state.settings.count);
//             brainUI.start();
//             updateTask();
//         }
//     });

// }

// d.on("game:start", function () {
//     state.settings.taskType = brainUI.getSelectedTaskType();
//     state.settings.operations = brainUI.getSelectedOperations();
//     state.settings.level = brainUI.getSelectedLevel();
//     state.settings.count = brainUI.getSelectedCount();

//     startGame();
// });

// d.on("game:stop", function () {
//     brainUI.stop();
// });

// d.on("game:restart", startGame);

// d.on("game:submit", function (jqe, answerContainer) {
//     var answerModel = answerConverter.convert(state.tasks[state.index], answerContainer.answer);

//     brainUI.updateTask(state.tasks[state.index]);
//     state.answers.push(answerModel);
//     var isCorrect = JSON.stringify(answerModel) == JSON.stringify(state.tasks[state.index].result);

//     state.index++;
//     state.score = state.score + (isCorrect ? 1 : 0);
//     brainUI.updateScore(state.score, state.settings.count);
//     brainUI.updateProgress(state.index, state.settings.count);
//     brainUI.updateHistory(isCorrect, state.answers[state.index - 1], state.tasks[state.index - 1]);
//     updateTask();
// });

// function updateTask() {
//     if (state.index == state.settings.count) {
//         brainUI.finish(state.score, state.settings.count);
//     } else {
//         brainUI.updateTask(state.tasks[state.index]);
//     }
// }

// module.exports = brain;