import BaseTaskHtmlGenerator from "./base-task-html-generator";

class ArithmeticTaskHtmlGenerator extends BaseTaskHtmlGenerator {
    constructor() {
        super();

        this.operations = {
            a: "+",
            s: "-",
            m: "*"
        };
    }

    renderTask(task) {
        return `<span class=\"inline-task\">${task.a} ${operations[task.operation]} ${task.b}</span>`;
    }

    renderTaskWithCorrectAnswer(task, isCorrectAnswer, answer) {
        if (isCorrectAnswer) {
            return `<span class=\"inline-task\">${task.a} ${operations[task.operation]} ${task.b} = ${task.result}</span>`;
        } else {
            return `<span class=\"inline-task\">${task.a} ${operations[task.operation]} ${task.b} = ${task.result} &ne; ${answer}</span>`;
        }
    }
}

export default ArithmeticTaskHtmlGenerator;