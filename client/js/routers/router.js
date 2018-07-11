import MenuView from "../views/menu";
import GameView from "../views/game";

import MenuModel from "../models/menu";

var Router = Backbone.Router.extend({
    routes: {
        "(/)": "index",
        "menu(/)": "menu",
        "game(/)": "game"
    },

    initialize: function (options) {
        this.container = options.container;
        this.menu = null;
        this.game = null;

        // this.game = new GameView();
        // this.game.render();
    },

    index: function () {
        Backbone.history.navigate('menu', { trigger: true });
    },

    menu: function () {
        if (!this.menu) {
            let menuModel = new MenuModel();
            menuModel.fetch({
                success: () => {
                    this.menu = new MenuView({ model: menuModel });
                    this.menu.render();
                    this.container.html(this.menu.el);
                }
            });
        }
    },

    game: function () {
        this.container.html(this.game.el);
    }
});

export default Router;