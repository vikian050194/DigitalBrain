$(document).ready(function () {
    $.ajaxSetup({ cache: false });
    $('#answer').focus();
    var count = 0;
    var task = undefined;

    $.ajax({
        type: "GET",
        url: '/task',
        success: function (types) {
            var content = '';
            types.forEach(function (element) {
                content += `<option value="${element.id}" data-toggle="tooltip" data-placement="right" description="${element.description}">${element.title}</option>`
            });

            $('#taskType').html(content);
            $('#taskType').val(types[0].id);
            $('#description').html(types[0].description);
        }
    });

    function next() {
        $('#answer').val('');

        $.ajax({
            type: "POST",
            url: '/task',
            success: function (tasks) {
                task = tasks[0];
                $('#task').html(`${task.a} ${task.operation} ${task.b} = ?`);
                $('#answer').focus();
            }
        });
    }

    function startStop() {
        $('#settings').toggle();
        $('#game').toggle();
    }

    function start() {
        startStop();
        next();
    }

    $('#start').click(start);

    function stop() {
        startStop();
        count = 0;
        updateProgress();
        $('#score').html('');
    }

    $('#stop').click(stop);

    function updateProgress() {
        var w = count * 10;
        $('#progress').css('width', w + '%');
    }

    function changeScore(isCorrect) {
        var plus = '<span class="glyphicon glyphicon-ok" aria-hidden="true" style="color:green;"></span>';
        var minus = '<span class="glyphicon glyphicon-remove" aria-hidden="true" style="color:red;"></span>';
        var newContent = $('#score').html() + (isCorrect ? plus : minus);
        $('#score').html(newContent);
    }

    $("#answer").on("keydown", function (e) {
        if (e.which == 13) {
            count++;
            updateProgress();
            var isCorrect = $("#answer").val() == task.result;
            changeScore(isCorrect);
            next();
        }
    });
});