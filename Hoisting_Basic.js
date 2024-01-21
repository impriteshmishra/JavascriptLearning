//hoisting
hello();// calling function before writing function. it will work only for function declration noy work for for function expression and arrow function
function hello(){
    console.log("Hello World");
}


console.log(hello);
// let hello="hello"; not work calling before declaration
// const hello="hello"; same things happen
var hello="hello"; // but work for var.

// This all things happen is known as hoisting