var randomInt = require('random-int');

function IntegerGenerator() {
    return {
        next: function (min, max) {
            return randomInt(min, max);
        }
    };
}

function TestIntegerGenerator(values) {
    var values = values;
    var index = 0;

    return {
        next: function (min, max) {
            if (values === undefined || values.length === 0 || values.length < index) {
                return undefined;
            }

            return values[index++];
        }
    };
}

module.exports = {IntegerGenerator, TestIntegerGenerator};