function BrainUI() {
    $('#taskType').change(function (element) {
        $('#description').html($(element).attr('description'));
    });
}

BrainUI.prototype.fillTasksTypes = function (types) {
    var content = '';
    types.forEach(function (element) {
        content += `<option value="${element.id}" data-toggle="tooltip" data-placement="right" description="${element.description}">${element.title}</option>`;
    });
    $('#taskType').html(content);
    $('#taskType').val(types[0].id);
    $('#description').html(types[0].description);
}

BrainUI.prototype.fillOperations = function (operations) {
    var content = '';
    operations.forEach(function (element) {
        content +=
            `  <label class="btn btn-info" operation="${element}"><input type="checkbox" autocomplete="off">${element}</label>`;
    });
    $('#operations').html(content);
    $('.glyphicon-unchecked').each(function () {
        $(this).click(function () {
            if ($(this).hasClass('glyphicon-unchecked')) {
                $(this).removeClass('glyphicon-unchecked').addClass('glyphicon-check');
            } else {
                $(this).removeClass('glyphicon-check').addClass('glyphicon-unchecked');
            }
        });
    });
}

BrainUI.prototype.fillLevels = function (levels) {
    var content = '';
    levels.forEach(function (element, index) {
        content += `<option value="${index}">${element}</option>`;
    });
    $('#level').html(content);
    $('#level').val(0);
}

BrainUI.prototype.getSelectedOperations = function () {
    var selectedOperations = [];
    $('label[class*="active"]').each(function () {
        selectedOperations.push($(this).attr('operation'));
    });

    return selectedOperations;
}

module.exports = BrainUI;