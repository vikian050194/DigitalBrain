import BaseTaskHtmlGenerator from "./base-task-html-generator";

class MatrixTaskHtmlGenerator extends BaseTaskHtmlGenerator {
    constructor() {
        super();

        this.operations = {
            a: "+",
            s: "-"
        };
    }

    renderMatrix(matrix) {
        let result = "<span class=\"argument\"><table class=\"\"><tbody>";

        for (let i = 0; i < matrix.length; i++) {
            let line = "<tr>";

            for (let j = 0; j < matrix[i].length; j++) {
                line += `<td><span>${matrix[i][j]}</span></td>`;
            }

            line += "</tr>";
            result += line;
        }

        result += "</tbody></table></span>";

        return result;
    }

    renderTask(task) {
        return `${renderMatrix(task.a)} <span class=\"operation\"> ${operations[task.operation]}</span> ${renderMatrix(task.b)}`;
    }

    renderTaskWithCorrectAnswer(task, isCorrectAnswer, answer) {
        if (isCorrectAnswer) {
            return `<div class="history-container">${renderMatrix(task.a)}<span class=\"operation\">${operations[task.operation]}</span>${renderMatrix(task.b)}<span class=\"operation\">=</span>${renderMatrix(task.result)}</div>`;
        } else {
            return `<div class="history-container">${renderMatrix(task.a)}<span class=\"operation\">${operations[task.operation]}</span>${renderMatrix(task.b)}<span class=\"operation\">=</span>${renderMatrix(task.result)}<span class=\"operation\">&ne;</span>${renderMatrix(answer)}</div>`;
        }
    }
}

export default MatrixTaskHtmlGenerator;