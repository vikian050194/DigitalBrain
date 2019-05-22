import React from "react";
import PropTypes from "prop-types";

const SelectInput = (props) => <div className="form-group col-lg-4 col-md-4 col-sm-4 col-xs-12">
    <label htmlFor="taskType">{props.name}:</label>
    <select className="form-control" id="taskType">
        {props.options.map((option) => {
            return <option key={option.id} value={option.id}>{option.name}</option>;
        })}
    </select>
</div>;

SelectInput.propTypes = {
    options: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired
};

export default SelectInput;