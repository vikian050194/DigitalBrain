var Menu = Backbone.View.extend({
    id: "menu",
    tagName: "div",
    className: "container",

    events: {
        "click #start": "start",
        "change #taskType": "onTaskTypeChanged",
        "change #level": "onLevelChanged",
        "change #size" : "onSizeChanged",
        "click input[operation]" : "onOperationChanged"
    },

    initialize: function () {

    },

    renderSizes: function (sizes) {
        var content = "";

        sizes.forEach(function (element) {
            content += `<option value="${element.value}">${element.key}(${element.value})</option>`;
        });

        return content;
    },

    renderLevels: function (levels) {
        var content = "";

        levels.forEach(function (element, index) {
            content += `<option value="${index}">${element}</option>`;
        });

        return content;
    },

    renderTasks: function (tasks) {
        var content = "";

        for (var task in tasks) {
            var element = tasks[task];
            content += `<option value="${element.id}">${element.name}</option>`;
        }

        return content;
    },

    getTaskByType: function (type) {
        return this.model.get("tasks").find((t) => t.id === type);
    },

    renderDescription: function (description) {
        return description;
    },

    renderOperations: function (operations) {
        let content = "",
            elementsInLine = 3,
            width = 0,
            count = operations.length,
            fullLines = Math.floor(count / elementsInLine),
            colors = [
                "success",
                "primary",
                "danger",
                "info",
                "warning"];;

        for (var i = 0; i < count; i++) {
            const element = operations[i],
                id = `checkbox:${element.name.toLowerCase()}`;

            if (i >= fullLines * elementsInLine) {
                width = 12 / (count % elementsInLine);
            } else {
                width = 12 / elementsInLine;
            }

            var color = colors[1];
            content += `<div class="col-lg-${width} col-md-${width} col-sm-${width} col-xs-12"><div class="funkyradio-${color}">
                        <input id="${id}"type="checkbox" operation="${element.id}" autocomplete="off"/>
                        <label for="${id}">${element.name}</label>
                        </div></div>`;
        }

        return content
    },

    render: function () {
        let type = this.model.selectedSettings.taskType,
            task = this.getTaskByType(type),
            html = `
<div class="row">
    <div class="form-group col-lg-4 col-md-4 col-sm-4 col-xs-12">
        <label for="taskType">Task:</label>
        <select class="form-control" id="taskType">${this.renderTasks(this.model.get("tasks"))}</select>
    </div>
    <div class="form-group col-lg-4 col-md-4 col-sm-4 col-xs-12">
        <label for="level">Level:</label>
        <select class="form-control" id="level">${this.renderLevels(this.model.get("levels"))}</select>
    </div>
    <div class="form-group col-lg-4 col-md-4 col-sm-4 col-xs-12">
        <label for="count">Size:</label>
        <select class="form-control" id="size">${this.renderSizes(this.model.get("sizes"))}</select>
    </div>
</div>
<hr />
<div class="row">
    <div class="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <label for="description">Description:</label>
        <div id="description" style="word-wrap:break-word;">${this.renderDescription(task.description)}</div>
    </div>
</div>
<hr />
<div class="row">
    <div class="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <label for="operations">Operations:</label>
        <div id="operations" class="funkyradio row">${this.renderOperations(task.operations)}</div>
    </div>
</div>
<hr />
<div class="row">
    <div class="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <button type="button" id="start" class="btn btn-primary">Start</button>
    </div>
</div>`;

        this.$el.html(html)

        return this;
    },

    start: function () {
        Backbone.trigger("start", this.model.selectedSettings);
    },

    onTaskTypeChanged: function () {
        let type = $("#taskType").val(),
            task = this.getTaskByType(type);

        this.model.setTaskType(type);

        $("#description").html(this.renderDescription(task.description));
        $("#operations").html(this.renderOperations(task.operations));
    },

    onLevelChanged: function () {
        this.model.setLevel($("#level").val());
    },

    onSizeChanged: function () {
        this.model.setSize($("#size").val());
    },

    onOperationChanged: function (e) {
        this.model.setOperation(e.target.attributes.operation.value);
    }
});

export default Menu;