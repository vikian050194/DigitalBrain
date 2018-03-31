var ArithmeticTaskGenerator = require('./arithmetic-task-generator'),
    MatrixTaskGenerator = require('./matrix-task-generator');

function TaskGeneratorProvider(dataGenerators) {
    var { integerGenerator } = dataGenerators;
    
    var generators = {
        arithmetic: ArithmeticTaskGenerator(),
        matrix: MatrixTaskGenerator()
    };

    return {
        getAllGenerators: function () {
            return generators
        }
    };
}

module.exports = TaskGeneratorProvider;