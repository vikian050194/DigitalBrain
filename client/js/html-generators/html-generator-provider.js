var ArithmeticTaskHtmlGenerator = require('./arithmetic-task-html-generator');;

function HtmlGeneratorProvider() {
    var generators = {
        arithmetic: ArithmeticTaskHtmlGenerator()
    };

    return {
        getAllGenerators: function() {
            return generators
        }
    };
}

module.exports = HtmlGeneratorProvider;