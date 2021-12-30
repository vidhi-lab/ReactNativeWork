const INITIAL_STATE={
    details:[],
    updateDataObject:{
        
    }
};
const reducer=(state=INITIAL_STATE,action)=>
{
    switch(action.type)
    {
        case 'LOADED_DATA':
            return {...state, details: action.payload.value};
        // case 'UPDATED_DATA':
        //         return {...state, updateData: action.payload};
        case 'SAVE_DATA':
            const obj = state.details.map(item => {
                if (item.id == state.updateDataObject.id) {
                  item = {
                    ...item,
                    title: state.updateDataObject.title,
                    body: state.updateDataObject.body,
                  };
                }
                return item;
              });
              return {...state, details: obj};
            default:
              return state;
    }
}
export default reducer;