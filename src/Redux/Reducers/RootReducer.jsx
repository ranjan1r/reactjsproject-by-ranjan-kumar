import {combineReducers} from "@reduxjs/toolkit"
import MaincetegoryReducer from "./MaincetegoryReducer"

export default combineReducers({
    MaincetegoryStateData: MaincetegoryReducer
})