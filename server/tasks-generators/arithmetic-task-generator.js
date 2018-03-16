function ArithmeticTaskGenerator(integerGenerator) {
    return {
        next: function (operation, min, max) {
            switch (operation) {
                case '+':
                    var a = integerGenerator.next(min, max),
                        b = integerGenerator.next(min, max),
                        result = a + b;
                    return { a, b, result, operation };
            }
        },
        title: 'Basic arithmetic',
        description: 'Addition and so on, nothing special.'
    }
}

module.exports = ArithmeticTaskGenerator;