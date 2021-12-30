import { combineReducers } from "redux"
import reducer from "./CountReducer";


const  combinedReducers=combineReducers({
    productval:reducer,
})
export default combinedReducers;