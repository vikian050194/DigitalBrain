import Backbone from "backbone";

var MenuModel = Backbone.Model.extend({
    defaults: {
        levels: []
    },

    url: "/menu",
});

export default MenuModel;