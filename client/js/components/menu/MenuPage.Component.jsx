import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Menu from "./Menu";
import loadMenuData from "../../redux/actions/loadMenuData";

class MenuPage extends React.Component {
    componentDidMount() {
        this.props.loadMenuData();
    }

    render() {
        const props = { ...this.props.settings, isLoading: this.props.isLoading };

        return <Menu {...props} />;
    }
}

MenuPage.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    settings: PropTypes.object.isRequired,
    loadMenuData: PropTypes.func.isRequired
};

const mapStateToProps = ({ menu: state }) => {
    return {
        settings: state.settings,
        isLoading: state.isLoading
    };
};

const mapActionsToProps = (dispatch) => {
    return {
        loadMenuData: () => dispatch(loadMenuData())
    };
};

export default connect(mapStateToProps, mapActionsToProps)(MenuPage);