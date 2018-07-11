var Loader = Backbone.View.extend({
    tagName: "div",
    className: "loader-container",
    initialize: function () {
        Backbone.on("loader:show", this.show, this);
        Backbone.on("loader:hide", this.hide, this);
        Backbone.on("loader:toggle", this.toggle, this);
    },
    render: function () {
        const html = `<div id="loader" class="loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>`;

        this.$el.html(html)

        return this;
    },
    show: function () {
        this.$el.show();
    },
    hide: function () {
        this.$el.hide();
    },
    toggle: function () {
        this.$el.toggle();
    }
});

export default Loader;