var assert = require("assert"),
    InputSettingsProvider = require("../input-generators/input-settings-provider");

describe("Input generators: InputSettingsProvider", function () {
    it("Initialize provider without parameters", function () {
        var p = new InputSettingsProvider();

        assert.ok(p.getInputSettingsByTask != undefined);
    });

    it("Get input settings for arithmetic task", function () {
        var task = {
            type: "arithmetic",
            operation: "a"
        },
            expected = {},
            p = new InputSettingsProvider();

        assert.deepEqual(p.getInputSettingsByTask(task), expected);
    });

    it("Get input settings for matrix task", function () {
        var task = {
            type: "matrix",
            operation: "a",
            a: [1, 2, 3]
        },
            expected = { size: 3 },
            p = new InputSettingsProvider();

        assert.deepEqual(p.getInputSettingsByTask(task), expected);
    });
});