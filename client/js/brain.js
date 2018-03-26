var BrainUI = require('./brain-ui'),
    brainUI = new BrainUI();

function brain() {
    $.ajaxSetup({ cache: false });
    $('#answer').focus();

    var index = 0;
    var count = 10;
    var tasks = [];
    var score = 0;

    $.ajax({
        type: "GET",
        url: '/task',
        success: function(res){
            tasks = res;
            brainUI.fillTasksTypes(tasks);
            brainUI.fillOperations(tasks[0].operations);
        }
    });
    
    var levels = ['Easy', 'Medium', 'Hard'];
    brainUI.fillLevels(levels);

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
            count
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

    function startStop() {
        $('#settings').toggle();
        $('#game').toggle();
    }

    function reset() {
        score = 0;
        index = 0;

        $('#progress').css('width', '0%');
    }

    function start() {
        reset();
        startStop();
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

    function updateProgress() {
        var w = parseInt(100.0 * index / count);
        $('#progress').css('width', w + '%');
        $('#progress').html(`${w}% Complete`);
    }

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