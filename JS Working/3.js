// when we use var to store function then it treat as variable.

console.log(myFunction);

var myFunction=function(){
    console.log("This is my function.");
}
console.log(myFunction);