$(document).ready(function () {
    $.ajaxSetup({ cache: false });
    $('#answer').focus();

    var task = undefined;

    $.ajax({
        type: "GET",
        url: '/task',
        success: function (types) {
            var content = '';
            types.forEach(function (element) {
                content += `<option value="${element}">${element}</option>`
            });

            $('#taskType').html(content);
            $('#taskType').val(types[0]);
        }
    });

    function start() {
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

    function changeScore(isCorrect) {
        var plus = '<span class="glyphicon glyphicon-ok" aria-hidden="true" style="color:green;"></span>';
        var minus = '<span class="glyphicon glyphicon-remove" aria-hidden="true" style="color:red;"></span>';
        var newContent = $('#score').html() + (isCorrect ? plus : minus);
        $('#score').html(newContent);
    }

    $("#answer").on("keydown", function (e) {
        if (e.which == 13) {
            var isCorrect = $("#answer").val() == task.result;
            changeScore(isCorrect);
            start();
        }
    });

    start();
});