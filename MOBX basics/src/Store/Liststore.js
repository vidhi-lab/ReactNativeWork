import { action,
computed,
makeObservable,
observable } from "mobx";


class Liststore{
    constructor(){
        makeObservable(this);
    }
    @observable data=[];

    @action addDataToList(mainTitle,bodyContent){
        this.data.push({
            title:mainTitle,
            body:bodyContent
        })
    }
    @action removeData(i){
        this.data.splice(i,1)

    }

    @action updateData(title,body,index){
        obj=this.data.map((item,i)=>{
            if(i==index){
                item={
                    ...item,
                    title:title,
                    body:body
                }
            }
            return item
        }
        
        )
        this.data=obj;

    }

    

}
export default Liststore;