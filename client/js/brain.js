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

    function nextTask() {
        $('#answer').val('');
        updateProgress();

        if (index === count) {
            $('#answer').prop('disabled', true);
            return;
        }

        var task = tasks[index];
        $('#task').html(`${task.a} ${task.operation} ${task.b} = ?`);
        $('#answer').focus();
    }

    function fetchTasks() {
        $('#answer').val('');
        $('#answer').prop('disabled', false);

        var data = {
            taskType: $('#taskType').val(),
            operations: brainUI.getSelectedOperations(),
            level: $('#level').val(),
            count: $('#count').val()
        };

        $.ajax({
            type: "POST",
            url: '/task',
            data,
            success: function (result) {
                tasks = result;
                nextTask();
            }
        });
    }

    function reset() {
        state = {
            count: 10,
            tasks: [],
            score: 0,
            index: 0
        };

        $('#progress').css('width', '0%');
    }

    function start() {
        reset();
        brainUI.startStop();
        fetchTasks();
        $('#score').html(`${score}/${count}`);
    }

    $('#start').click(start);

    function stop() {
        startStop();
        $('#score').html('');
        $('#history').html('');
    }

    $('#stop').click(stop);



    function updateScore(isCorrect) {
        var plus = '<span class="glyphicon glyphicon-ok" aria-hidden="true" style="color:green;"></span>';
        var minus = '<span class="glyphicon glyphicon-remove" aria-hidden="true" style="color:red;"></span>';
        var newContent = $('#history').html() + (isCorrect ? plus : minus);
        $('#history').html(newContent);
        score += isCorrect ? 1 : -1;
        $('#score').html(`${score}/${count}`);
    }

    $("#answer").on("keydown", function (e) {
        if (e.which == 13) {
            var isCorrect = $("#answer").val() == tasks[index].result;
            updateScore(isCorrect);
            index++;
            nextTask();
        }
    });
}

module.exports = brain;