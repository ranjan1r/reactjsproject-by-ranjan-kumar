import { configureStore }from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"

import RootReducer from "./Reducers/RootReducer";
import Rootsaga from "./Sagas/Service/RootSaga";

const saga= createSagaMiddleware()

const store = configureStore({
    reducer: RootReducer,
    middleware: () => [saga]
})
export default store
saga.run(Rootsaga)