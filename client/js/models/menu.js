var Menu = Backbone.Model.extend({
    url: "/api/menu",

    selectedSettings: {
        "taskType": "arithmetic",
        "size": 1,
        "level": 0,
        "operations": []
    },

    setTaskType(type) {
        this.selectedSettings.taskType = type;
    },

    setLevel(level) {
        this.selectedSettings.level = level;
    },

    setSize(size) {
        this.selectedSettings.size = size;
    },

    setOperation(operation) {
        const currentOpertations = this.selectedSettings.operations,
            indexOfOperation = currentOpertations.indexOf(operation),
            isOperationNew = indexOfOperation == -1;
        if (isOperationNew) {
            currentOpertations.push(operation);
        } else {
            currentOpertations.splice(indexOfOperation, 1);
        }

        this.selectedSettings.operations = currentOpertations;
    }
});

export default Menu;