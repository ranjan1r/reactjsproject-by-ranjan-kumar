import { ADD_MAINCETEGORY, DELETE_MAINCETEGORY, GET_MAINCETEGORY, UPDATE_MAINCETEGORY } from "../Constants"
export function createMaincetegory(data) {
    return {
        type: ADD_MAINCETEGORY,
        payload: data
    }

}

export function getMaincetegory() {
    return {
        type: GET_MAINCETEGORY,
    }

}

export function updateMaincetegory(data) {
    return {
        type: UPDATE_MAINCETEGORY,
        payload:data
    }

}
export function deleteMaincetegory(data) {
    return {
        type: DELETE_MAINCETEGORY,
        payload:data
    }

}