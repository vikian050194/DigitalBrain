function convertToInline(task, answer) {
    return answer[0];
}

function convertToMatrix(task, answer) {
    var matrix = [],
        size = task.a.length,
        index = 0,
        row = [];

    for (var i = 0; i < size; i++) {
        row = [];

        for (var j = 0; j < size; j++) {
            row.push(answer[index++]);
        }

        matrix.push(row);
    }

    return matrix;
}

function getDefaultInputSettings() {
    return {
        "arithmetic": {
            "a": convertToInline,
            "s": convertToInline,
            "m": convertToInline
        },
        "matrix": {
            "a": convertToMatrix,
            "s": convertToMatrix,
            "m": convertToMatrix,
            "d": convertToInline,
            "t": convertToMatrix,
            "g": convertToMatrix
        }
    };
}

function AnswerConverter(settings) {
    if (settings == undefined) {
        settings = getDefaultInputSettings();
    }

    return {
        convert: function (task, answer) {
            return settings[task.type][task.operation](task, answer);
        }
    }
}

module.exports = AnswerConverter;