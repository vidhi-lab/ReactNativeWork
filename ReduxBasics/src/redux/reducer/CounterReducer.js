import { createStore } from "redux";
import Action from '../action/Action'

const INITIAL_STATE={
    counter:0
}
const reducer=(state=INITIAL_STATE,action)=>
{
    switch (action.type) {
    case 'INCREMENT_COUNTER':
      return {...state,counter:state.counter+1};
    case 'DECREMENT_COUNTER':
      return {...state,counter:state.counter-1};
    default:
    return state;
  }
  
    
}

let store=createStore(reducer);
export default store;