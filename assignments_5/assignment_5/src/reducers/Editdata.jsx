const initial= [];


 const putTheData= (state=initial,action) =>{
    switch(action.type){
        case "EDIT" : {
            console.log("edit",action.payload)
            const arr=action.payload;
            return arr ;
        }
        case "UPDATE" :{
            return action.payload;
        }
        break;
        default: return state
    }
}

export default putTheData;
