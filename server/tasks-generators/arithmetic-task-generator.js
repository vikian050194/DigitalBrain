function ArithmeticTaskGenerator(integerGenerator) {
    return {
        next: function (operation, level) {
            var min = 0,
                max = 0;

            switch (level) {
                case 0:
                    min = 1;
                    max = 9;
                    break;
                case 1:
                    min = 1;
                    max = 99;
                    break;
                case 2:
                    min = 1;
                    max = 999;
                    break;
            }

            switch (operation) {
                case '+':
                    var a = integerGenerator.next(min, max),
                        b = integerGenerator.next(min, max),
                        result = a + b;
                    return { a, b, result, operation };
                case '-':
                    var a = integerGenerator.next(min, max),
                        b = integerGenerator.next(min, max),
                        result = a - b;
                    return { a, b, result, operation };
            }
        },
        title: 'Basic arithmetic',
        description: 'Addition and so on, nothing special.',
        operations: ['+', '-']
    }
}

module.exports = ArithmeticTaskGenerator;