import React from "react";
import PropTypes from "prop-types";

import SelectInput from "../common/Select";

import combinedWrapper from "../wrappers/CombinedWrapper";

class Menu extends React.Component {
    render() {
        return <div id="menu" className="container">
            <h1>Menu</h1>
            <div className="row">
                <SelectInput options={this.props.tasks || []} name="Task" />
                <SelectInput options={this.props.levels || []} name="Level" />
                <SelectInput options={this.props.sizes || []} name="Size" />
            </div>
        </div>;
    }
}

Menu.propTypes = {
    tasks: PropTypes.array.isRequired,
    levels: PropTypes.array.isRequired,
    sizes: PropTypes.array.isRequired
};

export default combinedWrapper(Menu);