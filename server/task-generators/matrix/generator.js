var BaseTaskGenerator = require("./../base-task-generator"),
    Operations = require("./operations"),
    Settings = require("./settings");


class MatrixTaskGenerator extends BaseTaskGenerator {
    constructor(integerGenerator) {
        super(integerGenerator);

        this.name = "Matrix";
        this.description = "Operations with matrices.";
        this.operations = Operations;
    }

    generateMatrix(settings) {
        const { size, min, max } = settings,
            matrix = [];

        for (let i = 0; i < size; i++) {
            let line = [];

            for (let j = 0; j < size; j++) {
                line.push(this.integerGenerator.next(min, max));
            }

            matrix.push(line);
        }

        return matrix;
    }

    map(f, size, a, b) {
        const result = [];
        let row = [];

        for (let i = 0; i < size; i++) {
            row = [];

            for (let j = 0; j < size; j++) {
                row.push(f(a[i][j], b[i][j]).toString());
            }

            result.push(row);
        }

        return result;
    }

    next(operation, level) {
        let setting = Settings[level],
            a = this.generateMatrix(setting),
            b = this.generateMatrix(setting),
            result = [];

        switch (operation) {
            case "a":
                result = this.map((a, b) => a + b, setting.size, a, b);
                break;
            case "s":
                result = this.map((a, b) => a - b, setting.size, a, b);
                break;
        }

        return {
            a,
            b,
            result,
            type: "matrix",
            operation
        };
    }
}

module.exports = MatrixTaskGenerator;