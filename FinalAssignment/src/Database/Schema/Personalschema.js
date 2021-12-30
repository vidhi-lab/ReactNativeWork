export const Notes={
    name:'notes',
    properties:{
        type:'string',
        title:'string',
        body:'string',
        id:'objectId',
        getDate:'date'
    }
}

export const updateNote=noteList=>new Promise((resolve,reject)=>{
    Realm.open({
        schema:[Notes]
    })
    .then(realm=>{
        realm.write(()=>{
            let updatingNotes=realm.objectForPrimaryKey('notes',noteList.id)
            updatingNotes.title=noteList.title,
            updatingNotes.body=noteList.body
        });
    })
    .catch((error)=>reject((error)))
})