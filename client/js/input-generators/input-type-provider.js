function getDefaultInputTypes() {
    return {
        "arithmetic": {
            "a": "inline",
            "s": "inline",
            "m": "inline"
        },
        "matrix":{
            "a": "matrix",
            "s": "matrix",
            "m": "matrix",
            "d": "inline",
            "t": "matrix",
            "g": "matrix"
        }
    };
}

function InputTypeProvider(types) {
    if (types == undefined) {
        types = getDefaultInputTypes();
    }

    return {
        getInputTypeByTask: function (task) {
            return types[task.type][task.operation];
        }
    }
}

module.exports = InputTypeProvider;