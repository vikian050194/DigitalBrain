function getEmptySettings() {
    return {};
}

function getSettingsForMatrix(task) {
    return {
        size: task.a.length
    }
}

function getDefaultInputSettings() {
    return {
        "arithmetic": {
            "a": getEmptySettings,
            "s": getEmptySettings,
            "m": getEmptySettings
        },
        "matrix": {
            "a": getSettingsForMatrix,
            "s": getSettingsForMatrix,
            "m": getSettingsForMatrix,
            "d": getEmptySettings,
            "t": getSettingsForMatrix,
            "g": getSettingsForMatrix
        }
    };
}

function InputSettingsProvider(settings) {
    if (settings == undefined) {
        settings = getDefaultInputSettings();
    }

    return {
        getInputSettingsByTask: function (task) {
            return settings[task.type][task.operation](task);
        }
    }
}

module.exports = InputSettingsProvider;