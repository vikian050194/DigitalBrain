class BaseTaskGenerator {
    constructor(integerGenerator) {
        this.integerGenerator = integerGenerator;

        this.name = "Base task generator";
        this.description = "Base task generator description";
        this.operations = [];
    }
}

module.exports = BaseTaskGenerator;