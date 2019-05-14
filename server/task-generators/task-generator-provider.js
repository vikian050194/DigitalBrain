var ArithmeticTaskGenerator = require("./arithmetic/generator"),
    MatrixTaskGenerator = require("./matrix/generator"),
    DataGeneratorProvider = require("./../data-generators/data-generator-provider");

function TaskGeneratorProvider(dataGenerators) {
    if (dataGenerators == undefined) {
        dataGenerators = (new DataGeneratorProvider()).getAllGenerators();
    }

    const { integerGenerator } = dataGenerators;

    var generators = {
        arithmetic: new ArithmeticTaskGenerator(integerGenerator),
        matrix: new MatrixTaskGenerator(integerGenerator)
    };

    return {
        getAllGenerators: function () {
            return generators;
        }
    };
}

module.exports = TaskGeneratorProvider;