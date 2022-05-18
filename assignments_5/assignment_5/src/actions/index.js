export const Takedata=((e)=>{
    return{
        type:"TAKEDATA",
        payload: e
    }
})

export const Delete=((el)=>{
    return{
        type:"DELETE" ,
        payload: el
    }
})

export const Edit=((ed)=>{
    return{
        type:"EDIT",
        payload: ed
    }
})

export const Change=((ec)=>{
    return{
        type:"CHANGE",
        payload: ec
    }
})

export const Remove=((rc)=>{
    return{
        type:"REMOVE",
        payload: rc
    }
})

export const Update=((uc)=>{
    return{
        type:"UPDATE",
        payload: uc
    }
})



// function remove(element){
//     let ans=idata.filter(item=>item.email!==element);
//     setData(ans)