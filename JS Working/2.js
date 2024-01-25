//hoisting
console.log(this);
console.log(window);
console.log(myFunction);
console.log(fullName);

function myFunction(){
    console.log("This is my function");
}

var firstName="Pritesh";
var lastName="Mishra";
var fullName=firstName+" "+ lastName;
console.log(fullName);