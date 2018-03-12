$(document).ready(function () {
    $.ajaxSetup({ cache: false });
    $('#input').focus();

    var task = undefined;

    function start() {
        $('#input').val('');

        $.ajax({
            type: "POST",
            url: '/task',
            success: function (tasks) {
                task = tasks[0];
                $('#task').html(`${task.a} ${task.operation} ${task.b} = ?`);
                $('#input').focus();
            }
        });
    }

    function changeScore(isCorrect) {
        var plus = '<span style="color:green;">+</span>';
        var minus = '<span style="color:red;">-</span>';
        var newContent = $('#result').html() + (isCorrect ? plus : minus);
        $('#result').html(newContent);
    }

    $("#input").on("keydown", function (e) {
        if (e.which == 13) {
            var isCorrect = $("#input").val() == task.result;
            changeScore(isCorrect);
            start();
        }
    });

    start();
});