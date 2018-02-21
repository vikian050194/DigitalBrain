function IntegerGenerator(values){
    var values = values;
    var index = 0;

    return function(){
        if(values === undefined || !Array.isArray(values) || values.length === 0 || values.length < index){
            return undefined;
        }

        return values[index++];
    }
}

module.exports = IntegerGenerator;