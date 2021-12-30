import {combineReducers} from 'redux';
import PersonalReducer from './Personalreducer';
import WorkReducer from '../Reducer/WorkReducer'
import Reduceridea from '../Reducer/Reduceridea'
import ListReducer from '../Reducer/ListReducer'

const rootReducer = combineReducers({
  personalVal: PersonalReducer,
  workVal:WorkReducer,
  listVal:ListReducer,
  ideaVal:Reduceridea
});
export default rootReducer;