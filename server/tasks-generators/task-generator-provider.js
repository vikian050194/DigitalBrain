var ArithmeticTaskGenerator = require('./arithmetic-task-generator');

function TaskGeneratorProvider(dataGenerators) {
    var generators = {
        arithmetic: ArithmeticTaskGenerator(dataGenerators.integerGenerator),
        test: ArithmeticTaskGenerator(dataGenerators.integerGenerator)
    };

    return {
        getAllGenerators: function() {
            return generators
        }
    };
}

module.exports = TaskGeneratorProvider;