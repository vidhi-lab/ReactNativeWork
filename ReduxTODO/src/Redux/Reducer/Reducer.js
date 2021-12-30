const INITIAL_STATE=[]

const sportReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case 'ADD':
            return[...state,action.payload]
        case 'EDIT':
            const txtvalue=action.paylod.txtvalue
            const body=action.payload.body
            // const id=action.payload.id
            // const arr=[...state]
            // arr.splice(id,1,{id,txtvalue,body})
            // return arr
        case 'DELETE':
            console.log(action.payload)
            const id2=action.payload
            const arr2=[...state]
            arr2.splice(id2,1)
            return arr2
        default:
            return state;
    }
}

export default sportReducer;