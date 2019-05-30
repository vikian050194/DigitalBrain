import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import reduxImmutableStateInveriant from "redux-immutable-state-invariant";

import rootReducer from "./reducers";
import initializeSagas from "./initializeSagas";

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(reduxImmutableStateInveriant(), thunk, sagaMiddleware)));

    initializeSagas(sagaMiddleware);

    return store;
}