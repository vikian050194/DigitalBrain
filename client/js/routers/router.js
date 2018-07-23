import MenuView from "../views/menu";
import GameView from "../views/game";

import MenuModel from "../models/menu";
import GameModel from "../models/game";

var Router = Backbone.Router.extend({
    routes: {
        "(/)": "menu",
        "game(/)": "game"
    },

    initialize: function (options) {
        this.container = options.container;
    },

    menu: function () {
        let menuModel = new MenuModel();
        menuModel.fetch({
            success: () => {
                this.menu = new MenuView({ model: menuModel });
                this.menu.render();
                this.container.html(this.menu.el);
            }
        });
    },

    game: function () {
        let gameModel = new GameModel(this.settings);
        gameModel.fetch({
            success: () => {
                this.game = new GameView({ model: gameModel });
                this.game.render();
                this.container.html(this.game.el);
            }
        });
    }
});

export default Router;