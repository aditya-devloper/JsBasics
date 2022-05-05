
var sum=5;
const ans= function(){

    const obj={
        add: function(x){
            sum=sum+x;
            return sum;
        },

        sub: function(x){
            sum=sum-x;
            return sum;
        },

        inc: function(){
            sum++;
            return sum;
        },
        
        dec: function(){
            sum--;
            return sum;
        },

        reset: function(){
            sum=5;
            return sum;
        },

        print: function(){
            console.log(sum);
        }
    }
    return obj;
}

const a= new ans();

console.log(a.add(5));
console.log(a.sub(5));
console.log(a.inc());
console.log(a.dec());
console.log(a.print());