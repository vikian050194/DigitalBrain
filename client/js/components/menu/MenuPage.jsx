import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Menu from "./Menu";
import actionCreator from "../../redux/actions/actionCreator";
import * as types from "../../redux/actions/actionTypes";

const MenuPage = ({ loadMenuData, settings, isLoading }) => {
    useEffect(() => {
        loadMenuData();
    }, []);

    var props = { ...settings, isLoading: isLoading };

    return <Menu  {...props} />;
};

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
        loadMenuData: () => dispatch(actionCreator(types.MENU_LOADING)())
    };
};

export default connect(mapStateToProps, mapActionsToProps)(MenuPage);