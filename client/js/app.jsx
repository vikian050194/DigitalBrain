import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/common/Header";

import Home from "./components/HomePage";
import About from "./components/AboutPage";
import PageNotFound from "./components/PageNotFound";

import Menu from "./components/menu/MenuPage";

class App extends React.Component {
    render() {
        console.info(`App is started at ${(new Date()).toLocaleString()}`);

        return (
            <Router>
                <Header />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/menu" exact component={Menu} />
                    <Route path="/about" exact component={About} />
                    <Route component={PageNotFound} />
                </Switch>
            </Router >);
    }
}

export default App;