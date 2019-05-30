import { delay } from "redux-saga/effects";

export function* userSaga() {
    while (true) {
        yield delay(1000);
        console.info("User saga loop");
    }
}