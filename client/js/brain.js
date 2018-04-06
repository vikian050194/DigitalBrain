var BrainUI = require('./brain-ui'),
    d = $(document);

function brain() {
    var brainUI = new BrainUI();

    $.ajaxSetup({ cache: false });
    $('#answer').focus();

    var fullInfo = {},
        state = {
            count: 5,
            tasks: [],
            type: '',
            score: 0,
            index: 0
        };

    $.ajax({
        type: "GET",
        url: '/task',
        success: function (r) {
            fullInfo = r;
            brainUI.updateTasks(r);
        }
    });

    var counts = [5, 10, 15, 20];
    brainUI.updateCounts(counts);

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
                brainUI.reset();

                state.score = 0;
                state.index = 0;

                state.tasks = result;

                state.type = data.taskType;
                state.count = data.count;

                brainUI.updateScore(state.score, state.count);
                brainUI.start();
                updateTask();
            }
        });
    });

    d.on('game:stop', function () {
        brainUI.stop();
    });

    d.on('game:submit', function (jqe, answer) {
        brainUI.updateTask(state.tasks[state.index], true);

        var isCorrect = answer == state.tasks[state.index].result;
        state.index++;
        state.score = state.score + (isCorrect ? 1 : 0);
        brainUI.updateScore(state.score, state.count);
        brainUI.updateProgress(state.index, state.count);
        brainUI.updateHistory(isCorrect, state.tasks[state.index - 1]);
        updateTask();
    });

    function updateTask() {
        if (state.index == state.count) {
            brainUI.finish(state.score, state.count);
        } else {
            brainUI.updateTask(state.tasks[state.index]);
        }
    }
}

module.exports = brain;