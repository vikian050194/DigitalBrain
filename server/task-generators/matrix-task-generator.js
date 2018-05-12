function Settings(size, min, max) {
    return { size, min, max };
}

function MatrixTaskGenerator(integerGenerator) {
    var allSettings = {};
    allSettings[0] = new Settings(2, 0, 5);
    allSettings[1] = new Settings(2, 0, 9);
    allSettings[2] = new Settings(2, -9, 9);
    allSettings[3] = new Settings(3, 0, 5);
    allSettings[4] = new Settings(3, 0, 9);
    allSettings[5] = new Settings(3, -9, 9);
    allSettings[6] = new Settings(4, 0, 5);
    allSettings[7] = new Settings(4, 0, 9);
    allSettings[8] = new Settings(4, -9, 9);
    allSettings[9] = new Settings(5, -9, 9);

    function generateMatrix(settings) {
        const { size, min, max } = settings;

        matrix = [];

        for (let i = 0; i < size; i++) {
            let line = [];

            for (let j = 0; j < size; j++) {
                line.push(integerGenerator.next(min, max));
            }

            matrix.push(line);
        }

        return matrix;
    }

    function map(f, size, a, b) {
        var result = [];
        var row = [];

        for (let i = 0; i < size; i++) {
            row = [];

            for (let j = 0; j < size; j++) {
                row.push(f(a[i][j], b[i][j]).toString());
            }

            result.push(row);
        }

        return result;
    }

    return {
        next: function (operation, level) {
            const { size, min, max } = allSettings[level];
            let a = generateMatrix(allSettings[level]),
                b = generateMatrix(allSettings[level]),
                result = [];

            switch (operation) {
                case 'a':
                    result = map((a, b) => a + b, size, a, b);
                    break;
                case 's':
                    result = map((a, b) => a - b, size, a, b);
                    break;
            }

            return {
                a,
                b,
                result,
                type: "matrix",
                operation
            };
        },
        name: 'Matrix',
        description: 'Operations with matrices.',
        operations: [
            { id: 'a', name: 'Addition' },
            { id: 's', name: 'Subtraction' }
            // { id: 'm', name: 'Multiplication' },
            // { id: 'd', name: 'Determinant' },
            // { id: 't', name: 'Transposition' }
            // { id: 'g', name: 'Gaussian elimination' },
        ]
    }
}

module.exports = MatrixTaskGenerator;