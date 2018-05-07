//var Slider = require("bootstrap-slider");
var HtmlGeneratorManager = require("./html-generators/html-generator-manager"),
    htmlGeneratorManager = new HtmlGeneratorManager(),
    d = $(document);

function BrainUI() {
    $("#settings").show();
    $("#game").hide();

    $(".loader-conteiner").hide();


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

    function submit() {
        d.trigger("game:submit", $("#answer").val())
    }

    $("#submit").click(submit);

    $("#answer").on("keydown", function (e) {
        if (e.which == 13) {
            submit();
        }
    });

    // $("#count").val(0);
    // new Slider("#count", {
    //     // ticks: [1, 2, 3],
    //     // "ticks-labels": ["short", "medium", "long"],
    //     min: 1,
    //     max: 3,
    //     step: 1,
    //     value: 3,
    //     tooltip: "hide"
    // });
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

BrainUI.prototype.updateTasks = function (tasks) {
    var content = "",
        firstId = "";

    for (var task in tasks) {
        if (firstId == "") {
            firstId = task;
        }

        var element = tasks[task];
        content += `<option value="${task}" data-toggle="tooltip" data-placement="right">${element.name}</option>`;
    }

    $("#taskType").html(content);
    $("#taskType").val(firstId);
    $("#taskType").change(function () {
        var id = this.value;

        d.trigger("update:description", id);
        d.trigger("update:operations", id);
    });

    $(document).trigger("update:description", firstId);
    $(document).trigger("update:operations", firstId);
}

BrainUI.prototype.updateDescription = function (value) {
    $("#description").html(value);
};

BrainUI.prototype.updateOperations = function (operations) {
    var content = "",
        width = 4,
        count = operations.length - 1,
        isOdd = count % 3 == 0,
        colors = [
            "success",
            "primary",
            "danger",
            "info",
            "warning"];;

    operations.forEach(function (element, index) {
        var id = `checkbox:${element.name.toLowerCase()}`;
        if (index == count && isOdd) {
            width = 12;
        }

        var color = colors[1];
        content += `<div class="col-lg-${width} col-md-${width} col-sm-${width} col-xs-12"><div class="funkyradio-${color}">
            <input id="${id}"type="checkbox" operation="${element.id}" autocomplete="off"/>
            <label for="${id}">${element.name}</label>
        </div></div>`;
    });

    $("#operations").html(content);
};

BrainUI.prototype.updateLevels = function (levels) {
    var content = "";

    levels.forEach(function (element, index) {
        content += `<option value="${index}">${element}</option>`;
    });

    $("#level").html(content);
    $("#level").val(0);
};

BrainUI.prototype.updateCounts = function (counts) {
    var content = "";

    counts.forEach(function (element) {
        content += `<option value="${element}">${element}</option>`;
    });

    $("#count").html(content);
    $("#count").val(5);
};

function updateProgress(index, count) {
    var w = parseInt(100.0 * index / count);
    $("#progress").html(`${w}%`);
}

BrainUI.prototype.updateProgress = updateProgress;

var correct = `<span class="glyphicon glyphicon-ok inline-task" aria-hidden="true" style="color:green;"></span>`;
var wrong = `<span class="glyphicon glyphicon-remove inline-task" aria-hidden="true" style="color:red;"></span>`;

BrainUI.prototype.updateHistory = function (isCorrectAnswer, task) {
    var content = $("#history").html();

    if (isCorrectAnswer) {
        content = `<div>${correct}&nbsp;${htmlGeneratorManager.renderTaskWithCorrectAnswer(task)}</div>${content}`;
    } else {
        content = `<div>${wrong}&nbsp;${htmlGeneratorManager.renderTaskWithCorrectAnswer(task)}</div>${content}`;
    }

    $("#history").html(content);
}

BrainUI.prototype.updateScore = function (score, count) {
    $("#score").html(score);
}

function disableInputAndSubmit(isDisabled) {
    $("#answer").prop("disabled", isDisabled);
    $("#submit").prop("disabled", isDisabled);
}

function disableInputAndAllButtons(isDisabled) {
    disableInputAndSubmit(isDisabled);
    $("#restart").prop("disabled", isDisabled);
    $("#stop").prop("disabled", isDisabled);
}

BrainUI.prototype.reset = function () {
    $("#answer").val("");

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
    // alert(`Well done! You got ${score} from ${count}`);

    // setTimeout(function () {
    //     $("#settings").show();
    //     $("#game").hide();
    // }, 5000)

}

BrainUI.prototype.updateTask = function (task) {
    var content = htmlGeneratorManager.renderTask(task);
    $("#task").html(content);
    $("#answer").val("");
    $("#answer").focus();
}

BrainUI.prototype.showLoader = function () {
    $(".loader-conteiner").toggle();
}

module.exports = BrainUI;