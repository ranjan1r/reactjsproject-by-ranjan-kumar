import { ADD_MAINCETEGORY_RED, DELETE_MAINCETEGORY_RED, GET_MAINCETEGORY_RED, UPDATE_MAINCETEGORY_RED } from "../Constants"
export default function MaincetegoryReducer(state = [], action) {
    let newState, index
    switch (action.type) {
        case ADD_MAINCETEGORY_RED:
            newState = [...state]
            newState.push(action.payload)
            return newState
        case GET_MAINCETEGORY_RED:
            return action.payload

        case UPDATE_MAINCETEGORY_RED:
            index = state.find(x => x.id === action.payload.id)
            state[index].name = action.payload.name
            return state

            case DELETE_MAINCETEGORY_RED:
                return state.filter(x=>x.id!==action.payload.id)

                default:
                    return state
    }
}