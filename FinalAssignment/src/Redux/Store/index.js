import {createStore} from 'redux';
import combinedReducers from '../Reducer';
const store = createStore(combinedReducers);

export default store;