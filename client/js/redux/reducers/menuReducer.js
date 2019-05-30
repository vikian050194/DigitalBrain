import * as types from "../actions/actionTypes";

const defaultState = {
    isLoading: true,
    settings: {
        tasks: [],
        levels: [],
        sizes: []
    }
};

export default function menuReducer(state = defaultState, action) {
    switch (action.type) {
        case types.MENU_LOADED:
            return {
                ...state,
                settings: { ...action.value },
                isLoading: false
            };
        default:
            return state;
    }
}