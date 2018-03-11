var IntegerGenerator = require('./integer-generator');;

function DataGeneratorProvider() {
    var generators = {
        integerGenerator: IntegerGenerator()
    };

    return {
        getAllGenerators: function() {
            return generators
        }
    };
}

module.exports = DataGeneratorProvider;