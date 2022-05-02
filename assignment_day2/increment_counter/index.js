var c=0;
var add=1;

function i(){

    c+=parseInt(add);
    console.log(c);
    document.getElementById("sd").innerHTML=c;
}

function d(){
    c-=parseInt(add);
    console.log(c);
    document.getElementById("sd").innerHTML=c;
}

function change(){
    
    let val = document.getElementById("val").value;
    if(val)
    add = val;
    // return token;
}


//c.innerHTML=con;
