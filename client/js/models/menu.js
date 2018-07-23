var Menu = Backbone.Model.extend({
    url: "/api/menu",

    defaults: {
        "taskType": "arithmetic",
        "size": 1,
        "level": 0,
        "operations": []
    },

    setTaskType(type) {
        this.set("taskType", type);
    },

    setLevel(level) {
        this.set("level", level);
    },

    setSize(size) {
        this.set("size", size);
    },

    setOperation(operation) {
        const currentOpertations = this.get("operations"),
            indexOfOperation = currentOpertations.indexOf(operation),
            isOperationNew = indexOfOperation == -1;
        if (isOperationNew) {
            currentOpertations.push(operation);
        } else {
            currentOpertations.splice(indexOfOperation, 1);
        }

        this.set("operations", currentOpertations);
    }
});

export default Menu;