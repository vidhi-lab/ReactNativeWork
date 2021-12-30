import { createStore } from 'redux';
import reducer from '../Reducer/CountReducer';


let store=createStore(reducer);
export default store;