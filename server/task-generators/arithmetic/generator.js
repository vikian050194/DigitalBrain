var BaseTaskGenerator = require("./../base-task-generator"),
    Settings = require("./settings"),
    Operations = require("./operations");

class ArithmeticTaskGenerator extends BaseTaskGenerator {
    constructor(integerGenerator) {
        super(integerGenerator);

        this.name = "Arithmetic";
        this.description = "Addition and so on, nothing special.";
        this.operations = Operations;
    }

    next(operation, level) {
        var isOriginalOrder = this.integerGenerator.next(0, 1) === 0;

        var currentSettings = Settings[level];
        var minA = isOriginalOrder ? currentSettings.minA : currentSettings.minB,
            maxA = isOriginalOrder ? currentSettings.maxA : currentSettings.maxB,
            minB = !isOriginalOrder ? currentSettings.minA : currentSettings.minB,
            maxB = !isOriginalOrder ? currentSettings.maxA : currentSettings.maxB,
            a = 0,
            b = 0,
            result = 0;

        do {
            a = this.integerGenerator.next(minA, maxA);
            b = this.integerGenerator.next(minB, maxB);

            switch (operation) {
                case "a":
                    result = a + b;
                    break;
                case "s":
                    var result = a - b;
                    break;
                case "m":
                    var result = a * b;
                    break;
            }
        } while (result == a || result == b);

        return {
            a: a.toString(),
            b: b.toString(),
            result: result.toString(),
            type: "arithmetic",
            operation
        };
    }
}

module.exports = ArithmeticTaskGenerator;