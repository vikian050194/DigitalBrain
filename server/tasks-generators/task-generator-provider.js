var ArithmeticTaskGenerator = require('./arithmetic-task-generator'),
    MatrixTaskGenerator = require('./matrix-task-generator');

function TaskGeneratorProvider(dataGenerators) {
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