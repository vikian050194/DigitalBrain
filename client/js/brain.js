var BrainUI = require('./brain-ui'),
    d = $(document);

function brain() {
    var brainUI = new BrainUI();

    $.ajaxSetup({ cache: false });
    $('#answer').focus();

    var fullInfo = {},
        state = {};

    $.ajax({
        type: "GET",
        url: '/task',
        success: function (r) {
            fullInfo = r;
            brainUI.updateTasks(r);
        }
    });

    var levels = [
        'Pfhhh',
        'Well, it was easy',
        'Easy as well',
        'Medium rare',
        'Medium',
        'Medium well',
        'Please, do not do that',
        'Hardcore',
        'Insane',
        'You shall not pass'];
    brainUI.updateLevels(levels);

    d.on('update:description', function (jqe, id) {
        brainUI.updateDescription(fullInfo[id].description);
    });

    d.on('update:operations', function (jqe, id) {
        brainUI.updateOperations(fullInfo[id].operations);
    });

    d.on('game:start', function () {
        var data = {
            taskType: brainUI.getSelectedTaskType(),
            operations: brainUI.getSelectedOperations(),
            level: brainUI.getSelectedLevel(),
            count: brainUI.getSelectedCount()
        };

        $.ajax({
            type: "POST",
            url: '/task',
            data,
            success: function (result) {
                reset();
                brainUI.reset();
                state.tasks = result;
                state.type = data.taskType;
                brainUI.start();
                nextTask();
            }
        });
    });

    d.on('game:stop', function () {
        brainUI.stop();
    });

    d.on('game:submit', function (jqe, answer) {
        var isCorrect = answer == state.tasks[state.index].result;
        state.score = state.score + (isCorrect ? 1 : -1);
        brainUI.updateHistory(isCorrect);
    });

    function nextTask() {
        if (state.index == state.count) {
            brainUI.finish();
        }

        brainUI.updateProgress(state.index, state.count);
        brainUI.updateTask(state.type, state.tasks[state.index]);
        // state.index++;
    }

    function reset() {
        state = {
            count: 5,
            tasks: [],
            score: 0,
            index: 0,
            type: ''
        };
    }

    reset();
}

module.exports = brain;