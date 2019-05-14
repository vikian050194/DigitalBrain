var IntegerGenerator = require("./integer-generator");

class DataGeneratorProvider {
    constructor() {
        this.generators = {
            integerGenerator: new IntegerGenerator()
        };
    }

    getAllGenerators() {
        return this.generators;
    }
}

module.exports = DataGeneratorProvider;