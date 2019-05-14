import React from "react";

import MenuInternal from "./MenuInternal";

class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            settings: {},
            isLoading: false
        };
    }

    componentWillMount() {
        this.setState({ isLoading: true });

        fetch("/api/menu")
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }

                return response.json();
            })
            .then((settings) => {
                this.setState({ ...settings, isLoading: false });
            });
    }

    render() {
        return <MenuInternal {...this.state}/>;
    }
}

export default Menu;