import actionCreator from "./../actions/actionCreator";
import * as types from "./../actions/actionTypes";

import { take, takeEvery, put, call, apply } from "redux-saga/effects";

const menuLoaded = (data) => actionCreator(types.MENU_LOADED)(data);

export const loadMenuDataSaga = function* () {
    yield take(types.MENU_LOADING);
    const response = yield call(fetch, "/api/menu");
    // const data = yield apply(response, response.json);
    const data = yield response.json();

    if (data.status >= 400) {
        throw new Error("Bad response from server");
    }

    yield put(menuLoaded(data));

    // yield takeEvery(types.MENU_LOADING, function*(){
    //     const response = yield call(fetch, "/api/menu");
    //     const data = yield apply(response, response.json);

    //     if (data.status >= 400) {
    //         throw new Error("Bad response from server");
    //     }

    //     yield put(menuLoaded(data));
    // });
};