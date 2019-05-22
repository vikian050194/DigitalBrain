import actionCreator from "./actionCreator";
import * as types from "./actionTypes";

const menuLoaded = (data) => actionCreator(types.MENU_LOADED)(data);

const loadMenuData = () => (dispatch) => {
    fetch("/api/menu")
        .then((response) => {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }

            return response.json();
        })
        .then((settings) => {
            dispatch(menuLoaded(settings));
        });
};

export default loadMenuData;