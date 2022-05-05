var n=3;
var count=0;


function after(n,hello){
    if(count > n-1) {
       let ans = hello();
       console.log(ans);
    }
    else count++;
 }


function hello() {
    return "hello"
}


after(n,hello);

after(n,hello);

after(n,hello);

after(n,hello);