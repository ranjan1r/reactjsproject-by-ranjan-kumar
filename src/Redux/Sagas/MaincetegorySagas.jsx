import { takeEvery, put } from "redux-saga/effects";
import { ADD_MAINCETEGORY, ADD_MAINCETEGORY_RED, DELETE_MAINCETEGORY, DELETE_MAINCETEGORY_RED, GET_MAINCETEGORY, GET_MAINCETEGORY_RED, UPDATE_MAINCETEGORY, UPDATE_MAINCETEGORY_RED } from "../Constants"
import { createRecord, deleteRecord, getRecord, updateRecord } from "./Service/APICallingService";

function* createSaga(action) {
    let response = yield createRecord('maincetegory',action.payload)
    yield put({ type: ADD_MAINCETEGORY_RED, payload: response })
}
function* getSaga(action) {
    let response = yield getRecord('maincetegory')
    yield put({ type: GET_MAINCETEGORY_RED, payload: response })
}
function* updateSaga(action) {
    yield updateRecord('maincetegory',action.payload)
    yield put({ type: UPDATE_MAINCETEGORY_RED, payload: action.response })
}
function* deleteSaga(action) {
    yield deleteRecord('maincetegory',action.payload)
    yield put({ type: DELETE_MAINCETEGORY_RED, payload: action.response })
}

export default function* maincetegorySagas() {
    yield takeEvery(ADD_MAINCETEGORY, createSaga)
    yield takeEvery(GET_MAINCETEGORY, getSaga)
    yield takeEvery(UPDATE_MAINCETEGORY, updateSaga)
    yield takeEvery(DELETE_MAINCETEGORY, deleteSaga)

}