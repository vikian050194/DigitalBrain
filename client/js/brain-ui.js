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
        var id = this.val();

        d.trigger('update:description', id);
        d.trigger('update:operations', id);
    });
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
    count = operations.length - 1;

    operations.forEach(function (element, index) {
        var id = `checkbox:${element.name.toLowerCase()}`;
        if(index == count){
            width = 12;
        }

        content += `<div class="col-lg-${width} col-md-${width} col-sm-${width} col-xs-12"><div class="funkyradio-success">
            <input id="${id}"type="checkbox" operation="${element.id}" autocomplete="off"/>
            <label for="${id}">${element.name}</label>
        </div></div>`;
        //content += `<div class="checkbox"><label><input type="checkbox" value="" >${element.name}</label></div>`;
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

BrainUI.prototype.startStop = function () {
    $('#settings').toggle();
    $('#game').toggle();
};

module.exports = BrainUI;