var assert = require("assert"),
    InputGeneratorManager = require("../input-generators/input-generator-manager");

describe("Input generators: InputGeneratorManager", function () {
    it("Initialize manager without parameters", function () {
        var m = new InputGeneratorManager();

        assert.ok(m.renderInput != undefined);
    });

    it("Render test HTML", function () {
        var type = "testType",
            expected = "testHTML",
            inputTypeProvider = {
                getInputTypeByTask: function () {
                    return type;
                }
            },
            inputSettingsProvider = {
                getInputSettingsByTask: function () { }
            },
            inputGenerators = {
                testType: {
                    renderInput: function () {
                        return expected;
                    }
                }
            },
            m = new InputGeneratorManager(inputTypeProvider, inputSettingsProvider, inputGenerators);

        assert.equal(m.renderInput(), expected);
    });
});