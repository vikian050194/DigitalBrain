var randomInt = require("random-int");

class IntegerGenerator {
    next(min, max) {
        return randomInt(min, max);
    }
}

module.exports = IntegerGenerator;