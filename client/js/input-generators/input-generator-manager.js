var InputGeneratorProvider = require("./input-generator-provider"),
    InputTypeProvider = require("./input-type-provider"),
    InputSettingsProvider = require("./input-settings-provider");

function InputGeneratorManager(inputTypeProvider, inputSettingsProvider, inputGenerators) {
    if (inputTypeProvider == undefined) {
        inputTypeProvider = new InputTypeProvider();
    }
    
    if (inputSettingsProvider == undefined) {
        inputSettingsProvider = new InputSettingsProvider();
    }

    if (inputGenerators == undefined) {
        inputGenerators = (new InputGeneratorProvider()).getAllGenerators();
    }

    return {
        renderInput: function (task) {
            var generator = inputGenerators[inputTypeProvider.getInputTypeByTask(task)];
            return generator.renderInput(inputSettingsProvider.getInputSettingsByTask(task));
        }
    }
}

module.exports = InputGeneratorManager;