const initialchange= true;

 const Remove= (state=initialchange,action) =>{
    switch(action.type){
        case "REMOVE" : {
            
           return action.payload ;
        }
        break;
        default: return state
    }
}

export default Remove;



// 