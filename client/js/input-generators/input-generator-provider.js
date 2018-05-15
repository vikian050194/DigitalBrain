var InlineInputGenerator = require("./inline-input-generator"),
    MatrixInputGenerator = require("./matrix-input-generator");

function InputGeneratorProvider(generators) {
    var generators = {
        inline: new InlineInputGenerator(),
        matrix: new MatrixInputGenerator()
    };

    return {
        getAllGenerators: function () {
            return generators
        }
    };
}

module.exports = InputGeneratorProvider;