var IntegerGenerator = require('./integer-generator');;

function DataGeneratorProvider() {
    var generators = {
        integerGenerator: new IntegerGenerator()
    };

    return {
        getAllGenerators: function () {
            return generators
        }
    };
}

module.exports = DataGeneratorProvider;