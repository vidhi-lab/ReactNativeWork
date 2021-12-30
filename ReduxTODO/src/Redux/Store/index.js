import { createStore } from "redux";
import sportReducer from "../Reducer/Reducer";

const store=createStore(sportReducer);

export default store;