function ArithmeticTaskHtmlGenerator() {
    var operations = {
        a: "+",
        s: "-",
        m: "*"
    };

    return {
        renderTask: function (task) {
            var result = '';

            result = `${task.a} ${operations[task.operation]} ${task.b} = ?`;

            return result;
        },
        renderTaskWithCorrectAnswer: function (task) {
            var result = '';

            return result;
        }
    }
}

module.exports = ArithmeticTaskHtmlGenerator;