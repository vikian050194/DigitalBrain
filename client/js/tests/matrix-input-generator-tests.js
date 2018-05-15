var assert = require("assert"),
    MatrixInputGenerator = require("../input-generators/matrix-input-generator");

describe("Input generators: MatrixInputGenerator", function () {
    it("Render input for size = 1", function () {
        var g = new MatrixInputGenerator(),
            settings = { size: 1 },
            input = g.renderInput(settings);

        assert.ok(input.includes("input"));
        assert.ok(input.includes("iid=\"0\""));
        assert.ok(input.includes("iid=\"1\"") == false);
    });

    it("Render input for size = 2", function () {
        var g = new MatrixInputGenerator(),
            settings = { size: 2 },
            input = g.renderInput(settings);

        assert.ok(input.includes("input"));
        
        for(var i = 0; i < settings.size; i++){
            assert.ok(input.includes(`iid=\"${i}\"`));
        }

        assert.ok(input.includes(`iid=\"${settings.size * settings.size}\"`) == false);
    });
});