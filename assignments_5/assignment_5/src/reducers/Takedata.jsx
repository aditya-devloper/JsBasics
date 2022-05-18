const initialstate= [];

const takeTheData = (state= initialstate, action) => {
    switch(action.type){
        case "TAKEDATA" : {
           
           // action.payload["id"]=i++;   
           
           const arr=[...state,action.payload];
            arr.map((e,id)=>{
                e["id"]=id;
            })
            return  arr; 
        }
        case "DELETE" : {
            console.log("delete",state)
          const arr=state.filter(item=>item.id!==action.payload);
          arr.map((e,id)=>{
                e["id"]=id;
            })
            return  arr; 
            // return [state];
        }
        case "REMOVE": {
            let b=state.map((e)=>{
                if(e.id==action.payload.id)
                {
                    return{...e,name:action.payload.name,email:action.payload.email,phone:action.payload.phone}
                }
                else{
                    return e;
                }
            })
            return b;
        }

        default : return state;
    }
}




export default takeTheData;





