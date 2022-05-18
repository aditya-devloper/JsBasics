const initialchange= false;

 const changeTheData= (state=initialchange,action) =>{
    switch(action.type){
        case "CHANGE" : {
           // state=true;
           state=action.payload;
            return state ;
        }
        break;
        default: return state
    }
}

export default changeTheData;