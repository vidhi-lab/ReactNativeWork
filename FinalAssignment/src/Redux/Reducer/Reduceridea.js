const INITIAL_STATE = {
    title: '',
    body: '',
  };
  
  const Reduceridea = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'GET_TITLES':
        return {...state, title: action.payload};
      case 'GET_BODYS':
        return {...state, body: action.payload};
      default:
        return state;
    }
  };
  export default Reduceridea;
  