function ArithmeticTask(integerGenerator) {
    return {
        next: function (operation, min, max) {
            switch (operation) {
                case '+':
                    var a = integerGenerator.next(min, max),
                        b = integerGenerator.next(min, max),
                        result = a + b;
                    return { a, b, result, operation };
            }
        }
    }
}

module.exports = ArithmeticTask;