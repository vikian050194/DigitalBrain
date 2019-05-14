import React from "react";

import combinedWrapper from "../wrappers/CombinedWrapper";

class MenuInternal extends React.Component {
    render() {
        const renderTasks = (tasks) => {
            return tasks.map((element) => {
                return <option key={element.id} value={element.id}>{element.name}</option>;
            }, this);
        };

        const renderLevels = (levels) => {
            return levels.map((element) => {
                return <option key={element.id} value={element.id}>{element.name}</option>;
            }, this);
        };

        const renderSizes = (sizes) => {
            return sizes.map((element) => {
                return <option key={element.id} value={element.id}>{element.name}</option>;
            }, this);
        };

        return <div id="menu" className="container">
            <h1>Menu</h1>
            <div className="row">
                <div className="form-group col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <label htmlFor="taskType">Task:</label>
                    <select className="form-control" id="taskType">{renderTasks(this.props.tasks)}</select>
                </div>
                <div className="form-group col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <label htmlFor="level">Level:</label>
                    <select className="form-control" id="level">{renderLevels(this.props.levels)}</select>
                </div>
                <div className="form-group col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <label htmlFor="count">Size:</label>
                    <select className="form-control" id="size">{renderSizes(this.props.sizes)}</select>
                </div>
            </div>
        </div>;
    }
}

export default combinedWrapper(MenuInternal);