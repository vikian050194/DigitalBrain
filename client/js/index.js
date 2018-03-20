$(document).ready(function () {
    $.ajaxSetup({ cache: false });
    $('#answer').focus();
    var index = 0;
    var count = 2;
    var tasks = undefined;
    var score = 0;

    $.ajax({
        type: "GET",
        url: '/task',
        success: function (types) {
            var content = '';
            types.forEach(function (element) {
                content += `<option value="${element.id}" data-toggle="tooltip" data-placement="right" description="${element.description}">${element.title}</option>`;
            });

            $('#taskType').html(content);
            $('#taskType').val(types[0].id);
            $('#description').html(types[0].description);
        }
    });

    $('#taskType').change(function (element) {
        $('#description').html($(e).attr('description'));
    });

    function getSelectedOperations() {
        $('operation')
    }

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
            operations: ['+', '-'],
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
});