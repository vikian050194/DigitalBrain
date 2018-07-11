import Loader from "./views/loader";
import Router from "./routers/router";

var App = Backbone.View.extend({
    initialize: function () {
        this.router = new Router({ container: $(".current") });
    },
    render: function () {
        var loader = new Loader();
        this.$el.append(loader.render().el);
        loader.hide();

        return this;
    },
    start: function () {
        Backbone.history.start({ pushState: true });

        console.log(`App is started at ${(new Date()).toLocaleString()}`);
    }
});

export default App;