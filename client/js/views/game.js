// import HtmlGeneratorManager from "./html-generators/html-generator-manager";
// import InputGeneratorManager from "./input-generators/input-generator-manager";

// var htmlGeneratorManager = new HtmlGeneratorManager(),
//     inputGeneratorManager = new InputGeneratorManager(),
//     d = $(document);

var GameView = Backbone.View.extend({
    id: "game",
    tagName: "div",
    className: "container",

    initialize: function () {

    },
    
    render: function () {
        const html = `<h1>Game</h1>`;

        this.$el.html(html)

        return this;
    }
});

module.exports = GameView;

/*

$("#taskType").change(function () {
    var id = this.value;

    d.trigger("update:description", id);
    d.trigger("update:operations", id);
});

$("#start").click(function () {
    d.trigger("game:start");
});

$("#stop").click(function () {
    d.trigger("game:stop");
});

$("#restart").click(function () {
    d.trigger("game:restart");
});

$("#submit").click(submit);
}

BrainUI.prototype.getSelectedTaskType = function () {
    return $("#taskType").val();
}

BrainUI.prototype.getSelectedLevel = function () {
    return $("#level").val();
}

BrainUI.prototype.getSelectedCount = function () {
    return $("#count").val();
}

BrainUI.prototype.getSelectedOperations = function () {
    var selectedOperations = [];

    $("input[operation]").each(function () {
        if ($(this).is(":checked")) {
            selectedOperations.push($(this).attr("operation"));
        }
    });

    return selectedOperations;
}

BrainUI.prototype.updateDescription = function (value) {
    $("#description").html(value);
};

function updateProgress(index, count) {
    var w = Math.floor(100.0 * index / count);
    $("#progress").html(`${w}%`);
}

BrainUI.prototype.updateProgress = updateProgress;

BrainUI.prototype.updateHistory = function (isCorrectAnswer, answer, task) {
    var content = $("#history").html();

    if (isCorrectAnswer) {
        content = `<div class="alert alert-success">${htmlGeneratorManager.renderTaskWithCorrectAnswer(task, true)}</div>${content}`;
    } else {
        content = `<div class="alert alert-danger">${htmlGeneratorManager.renderTaskWithCorrectAnswer(task, false, answer)}</div>${content}`;
    }

    $("#history").html(content);
}

BrainUI.prototype.updateScore = function (score, count) {
    $("#score").html(score);
}

function disableInputAndSubmit(isDisabled) {
    $("[iid]").prop("disabled", isDisabled);
    $("#submit").prop("disabled", isDisabled);
}

function disableInputAndAllButtons(isDisabled) {
    disableInputAndSubmit(isDisabled);
    $("#restart").prop("disabled", isDisabled);
    $("#stop").prop("disabled", isDisabled);
}

BrainUI.prototype.reset = function () {
    disableInputAndAllButtons(false);

    $("#stop").html("Stop");

    $("#score").html("");
    $("#history").html("");
    $("#task").html("");

    updateProgress(0, 1);
}

BrainUI.prototype.start = function () {
    $("#settings").hide();
    $("#game").show();

    $("#submit").removeClass("btn-default").addClass("btn-primary");
    $("#stop").removeClass("btn-primary").addClass("btn-default");
};

BrainUI.prototype.stop = function () {
    $("#settings").show();
    $("#game").hide();
}

BrainUI.prototype.finish = function (score, count) {
    disableInputAndSubmit(true);
    $("#submit").removeClass("btn-primary").addClass("btn-default");
    $("#stop").removeClass("btn-default").addClass("btn-primary");
    $("#stop").html("Finish");
}

BrainUI.prototype.updateTask = function (task) {
    var content = htmlGeneratorManager.renderTask(task);
    $("#task").html(content);
    $(".answer-container").html(inputGeneratorManager.renderInput(task, {}));
    $("[iid=\"0\"]").focus();

    $("[iid]").on("keydown", function (e) {
        if (e.which == 13) {
            var iid = parseInt($(this).attr("iid"));

            if ($(this).attr("last") == undefined) {
                $(`[iid="${iid + 1}"]`).focus();
            } else {
                submit();
            }
        }
    });
}

BrainUI.prototype.showLoader = function () {
    $(".loader-container").toggle();
}
*/