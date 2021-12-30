const INITIAL_STATE = {
    title: '',
    body: '',
  };
  
  const ListReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'GET_TITLELIST':
        return {...state, title: action.payload};
      case 'GET_BODYLIST':
        return {...state, body: action.payload};
      default:
        return state;
    }
  };
  export default ListReducer;
  