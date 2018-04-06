function ArithmeticTaskHtmlGenerator() {
    var operations = {
        a: "+",
        s: "-",
        m: "*"
    };

    return {
        renderTask: function (task) {
            return `${task.a} ${operations[task.operation]} ${task.b} = ?`;
        },
        renderTaskWithCorrectAnswer: function (task) {
            return `${task.a} ${operations[task.operation]} ${task.b} = ${task.result}`;
        }
    }
}

module.exports = ArithmeticTaskHtmlGenerator;