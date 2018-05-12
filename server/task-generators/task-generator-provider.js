var ArithmeticTaskGenerator = require('./arithmetic-task-generator'),
    MatrixTaskGenerator = require('./matrix-task-generator'),
    DataGeneratorProvider = require("./../data-generators/data-generator-provider");

function TaskGeneratorProvider(dataGenerators) {
    if (dataGenerators == undefined) {
        dataGenerators = (new DataGeneratorProvider()).getAllGenerators();
    }

    const { integerGenerator } = dataGenerators;

    var generators = {
        arithmetic: ArithmeticTaskGenerator(integerGenerator),
        matrix: MatrixTaskGenerator(integerGenerator)
    };

    return {
        getAllGenerators: function () {
            return generators
        }
    };
}

module.exports = TaskGeneratorProvider;