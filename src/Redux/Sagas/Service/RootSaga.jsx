import { all } from "redux-saga/effects";
import maincetegorySagas from "../MaincetegorySagas"
export default function* Rootsaga() {
    yield all([
        maincetegorySagas()
    ])
} 