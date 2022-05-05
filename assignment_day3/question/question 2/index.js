

function zoin(){
    var ad="";

    for(let i=0;i<arguments.length;i++)
    {
        ad+=arguments[i];
    }
    return ad;
}

var a=zoin("z","o","p","s","m","a","r","t");
var b=zoin("a","b","c");
console.log(a);
console.log(b);