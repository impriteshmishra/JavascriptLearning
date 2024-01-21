// function returning function

function myFunc(){
    function hello(){
        return "hello wolrld";
    }
    return hello;
}

const ans = myFunc();
// console.log(ans);
// ans();
console.log(ans());
