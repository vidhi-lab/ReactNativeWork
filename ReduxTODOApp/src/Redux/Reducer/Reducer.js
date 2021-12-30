const INITIAL_STATE={
    isLoading:false,
    data:[],
    error:'',
}

const reducer=(state=INITIAL_STATE,action)=>{
    switch (action.type) {
        // case 'IS_FETCHING':
        //     return {...state,isLoading:true}
        case 'IS_SUCCESS':
            return {...state,isLoading:false,data:action.payload,error:''}
        // case 'IS_FAILURE':
        //     return {...state,isLoading:false,error:action.payload}
        case 'UPDATED_DETAILS':
            const id =action.payload.index
            const first_name=action.payload.first_name
            const  last_name=action.payload.last_name
            console.log(id)
            console.log(first_name)
            console.log(last_name)
            const arr=[{...state.data.data}]
            console.log(arr)
            arr.splice(id,2,first_name,last_name)
            return arr
        default:
           return state; 
    }
}
export default reducer;