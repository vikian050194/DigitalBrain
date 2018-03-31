var Slider = require("bootstrap-slider");

var d = $(document);

function BrainUI() {
    function getArguments(a) {
        var result = [];

        for (var i = 1; i < a.length; i++) {
            result.push(a[i]);
        }

        return result;
    }

    $('#taskType').change(function () {
        var id = this.value;

        d.trigger('update:description', id);
        d.trigger('update:operations', id);
    });


    $('#count').val(5);
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

BrainUI.prototype.getSelectedOperations = function () {
    var selectedOperations = [];

    $('input[operation]').each(function () {
        if ($(this).is(':checked')) {
            selectedOperations.push($(this).attr('operation'));
        }
    });

    return selectedOperations;
}

BrainUI.prototype.updateTasks = function (tasks) {
    var content = '',
        firstId = '';

    for (var task in tasks) {
        if (firstId == '') {
            firstId = task;
        }

        var element = tasks[task];
        content += `<option value="${task}" data-toggle="tooltip" data-placement="right">${element.name}</option>`;
    }

    $('#taskType').html(content);
    $('#taskType').val(firstId);
    $('#taskType').change(function () {
        var id = this.value;

        d.trigger('update:description', id);
        d.trigger('update:operations', id);
    });

    $(document).trigger('update:description', firstId);
    $(document).trigger('update:operations', firstId);
}

BrainUI.prototype.updateDescription = function (value) {
    $('#description').html(value);
};

BrainUI.prototype.updateOperations = function (operations) {
    var content = '',
        width = 6,
        count = operations.length - 1,
        isOdd = count % 2 == 0;

    operations.forEach(function (element, index) {
        var id = `checkbox:${element.name.toLowerCase()}`;
        if (index == count && isOdd) {
            width = 12;
        }

        content += `<div class="col-lg-${width} col-md-${width} col-sm-${width} col-xs-12"><div class="funkyradio-success">
            <input id="${id}"type="checkbox" operation="${element.id}" autocomplete="off"/>
            <label for="${id}">${element.name}</label>
        </div></div>`;
    });

    $('#operations').html(content);
};

BrainUI.prototype.updateLevels = function (levels) {
    var content = '';

    levels.forEach(function (element, index) {
        content += `<option value="${index}">${element}</option>`;
    });

    $('#level').html(content);
    $('#level').val(0);
};

BrainUI.prototype.updateProgress = function (index, count) {
    var w = parseInt(100.0 * index / count);
    $('#progress').css('width', w + '%');
    $('#progress').html(`${w}% Complete`);
}

BrainUI.prototype.startStop = function () {
    $('#settings').toggle();
    $('#game').toggle();
};

module.exports = BrainUI;