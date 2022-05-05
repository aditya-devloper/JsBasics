let sum=function(a){
    if(a)
    {
    return function(b){
        if(b){
            return sum(a+b);
        }
        return a;
    }
}
else{
    return 0;
}
}

var a= sum(1)(2)(3)();
//a = sum();
console.log(a);