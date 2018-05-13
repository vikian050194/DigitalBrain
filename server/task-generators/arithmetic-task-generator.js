function Settings(minA, maxA, minB, maxB) {
    return { minA, maxA, minB, maxB };
}

function ArithmeticTaskGenerator(integerGenerator) {
    var allSettings = {};
    allSettings[0] = new Settings(0, 9, 0, 9);
    allSettings[1] = new Settings(0, 9, 10, 99);
    allSettings[2] = new Settings(0, 9, 100, 999);
    allSettings[3] = new Settings(10, 99, 10, 99);
    allSettings[4] = new Settings(10, 99, 100, 999);
    allSettings[5] = new Settings(10, 99, 1000, 9999);
    allSettings[6] = new Settings(100, 999, 100, 999);
    allSettings[7] = new Settings(100, 999, 1000, 9999);
    allSettings[8] = new Settings(100, 999, 10000, 99999);
    allSettings[9] = new Settings(0, 9999999, 0, 9999999);

    return {
        next: function (operation, level) {
            var isOriginalOrder = integerGenerator.next(0, 1) === 0;

            var currentSettings = allSettings[level];
            var minA = isOriginalOrder ? currentSettings.minA : currentSettings.minB,
                maxA = isOriginalOrder ? currentSettings.maxA : currentSettings.maxB,
                minB = !isOriginalOrder ? currentSettings.minA : currentSettings.minB,
                maxB = !isOriginalOrder ? currentSettings.maxA : currentSettings.maxB,
                a = 0,
                b = 0,
                result = 0;

            do {
                a = integerGenerator.next(minA, maxA);
                b = integerGenerator.next(minB, maxB);

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
        },
        name: "Arithmetic",
        description: "Addition and so on, nothing special.",
        operations: [
            { id: "a", name: "Addition" },
            { id: "s", name: "Subtraction" },
            { id: "m", name: "Multiplication" }
        ]
    }
}

module.exports = ArithmeticTaskGenerator;