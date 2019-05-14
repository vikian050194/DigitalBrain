function TestIntegerGenerator(values) {
    let index = 0;

    return {
        next: function () {
            if (values === undefined || values.length === 0 || values.length < index) {
                return undefined;
            }

            return values[index++];
        }
    };
}

module.exports = TestIntegerGenerator;