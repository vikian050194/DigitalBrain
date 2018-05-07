function ArithmeticTaskHtmlGenerator() {
    var operations = {
        a: "+",
        s: "-",
        m: "*"
    };

    return {
        renderTask: function (task) {
            return `<span class=\"inline-task\">${task.a} ${operations[task.operation]} ${task.b}</span>`;
        },
        renderTaskWithCorrectAnswer: function (task) {
            return `<span class=\"inline-task\">${task.a} ${operations[task.operation]} ${task.b} = ${task.result}</span>`;
        }
    }
}

module.exports = ArithmeticTaskHtmlGenerator;