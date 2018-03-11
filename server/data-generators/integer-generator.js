var randomInt = require('random-int');

function IntegerGenerator() {
    return {
        next: function (min, max) {
            return randomInt(min, max);
        }
    };
}

module.exports = IntegerGenerator;