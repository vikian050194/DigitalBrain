function BrainUI() {
    var d = $(document);

    function getArguments(a){
        var result = [];
        
        for(var i = 1; i <a.length; i++){
            result.push(a[i]);
        }

        return result;
    }

    $('#taskType').change(function (jqe, el) {
        var id = el.val();
        $(document).trigger('fetch:description', );operations
        $(document).trigger('fetch:operations', tasks[0].id);
    });

    d.on('update:tasks', function () {
        var content = '',
        tasks = getArguments(arguments)[0],
        firstId = '';

        for (var task in tasks) {
            if(firstId == ''){
                firstId = task;
            }

            var element = tasks[task];
            content += `<option value="${task}" data-toggle="tooltip" data-placement="right">${element.name}</option>`;
        }

        $('#taskType').html(content);
        $('#taskType').val(firstId);

        $(document).trigger('fetch:description', firstId);
        $(document).trigger('fetch:operations', firstId);
    });

    d.on('update:description', function (jqe, value) {
        $('#description').html(value);
    });

    d.on('update:operations', function () {
        var content = '';
        var operations = getArguments(arguments);

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
    });

    d.on('update:levels', function () {
        var content = '';
        var levels = getArguments(arguments);

        levels.forEach(function (element, index) {
            content += `<option value="${index}">${element}</option>`;
        });
        $('#level').html(content);
        $('#level').val(0);
    });
}


BrainUI.prototype.fillLevels = function (levels) {

}

BrainUI.prototype.getSelectedOperations = function () {
    var selectedOperations = [];
    $('label[class*="active"]').each(function () {
        selectedOperations.push($(this).attr('operation'));
    });

    return selectedOperations;
}

module.exports = BrainUI;