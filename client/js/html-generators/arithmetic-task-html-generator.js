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
        renderTaskWithCorrectAnswer: function (task, isCorrectAnswer, answer) {
            if(isCorrectAnswer){
                return `<span class=\"inline-task\">${task.a} ${operations[task.operation]} ${task.b} = ${task.result}</span>`;
            } else{
                return `<span class=\"inline-task\">${task.a} ${operations[task.operation]} ${task.b} = ${task.result} &ne; ${answer}</span>`;
            }
        }
    }
}

module.exports = ArithmeticTaskHtmlGenerator;