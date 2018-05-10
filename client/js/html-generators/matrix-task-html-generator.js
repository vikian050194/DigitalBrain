function MatrixTaskHtmlGenerator() {
    var operations = {
        a: "+",
        s: "-",
        m: "*"
    };

    function renderMatrix(matrix) {
        let result = "<span class=\"argument\"><table class=\"\"><tbody>";

        for (let i = 0; i < matrix.length; i++) {
            let line = "<tr>";

            for (let j = 0; j < matrix[i].length; j++) {
                line+=`<td><span>${matrix[i][j]}</span></td>`;
            }

            line += "</tr>";
            result += line;
        }

        result += "</tbody></table></span>";

        return result;
    }

    return {
        renderTask: function (task) {
            return `${renderMatrix(task.a)} <span class=\"operation\"> ${operations[task.operation]}</span> ${renderMatrix(task.b)}`;
        },
        renderTaskWithCorrectAnswer: function (task) {
            return `<div class="history-conteiner" style="margin-bottom:15px;">${renderMatrix(task.a)} <span class=\"operation\">${operations[task.operation]}</span> ${renderMatrix(task.b)}</div><div class="history-conteiner">${renderMatrix(task.result)}</div>`;
        }
    }
}

module.exports = MatrixTaskHtmlGenerator;