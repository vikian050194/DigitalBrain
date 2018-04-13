function MatrixTaskHtmlGenerator() {
    var operations = {
        a: "+",
        s: "-",
        m: "*"
    };

    function renderMatrix(matrix) {
        let result = "<table class=\"table table-bordered table-hover\"><tbody>";

        for (let i = 0; i < matrix.length; i++) {
            let line = "<tr>";

            for (let j = 0; j < matrix[i].length; j++) {
                line+=`<td>${matrix[i][j]}</td>`;
            }

            line += "</tr>";
            result += line;
        }

        result += "</tbody></table>";

        return result;
    }

    return {
        renderTask: function (task) {
            return `${renderMatrix(task.a)} ${operations[task.operation]} ${renderMatrix(task.b)}`;
        },
        renderTaskWithCorrectAnswer: function (task) {
            return `${renderMatrix(task.a)} ${operations[task.operation]} ${renderMatrix(task.b)} = ${task.result}`;
        }
    }
}

module.exports = MatrixTaskHtmlGenerator;