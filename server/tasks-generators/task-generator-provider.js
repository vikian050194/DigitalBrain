var ArithmeticTaskGenerator = require('./arithmetic-task-generator'),
    MatrixTaskGenerator = require('./matrix-task-generator');

function TaskGeneratorProvider(dataGenerators) {
    var integerGenerator = dataGenerators.integerGenerator;
    
    var generators = {
        arithmetic: ArithmeticTaskGenerator(integerGenerator),
        matrix: MatrixTaskGenerator()
    };

    return {
        getAllGenerators: function () {
            return generators
        }
    };
}

module.exports = TaskGeneratorProvider;