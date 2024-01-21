let a = 10;
console.log(a);

let b = [1, 2, 3, 4, 5];
console.log(b);
console.log("Hello World!!!");

//Javascript
//Variables, Array, Function, Loops , Classes, Objects

/*
let e = 50; //Block scope
var fc; //function scope

function fun() {
    let a = 5;
    if (a == 5) {
        // let b = 10;
        // console.log("Inside", b);
        //let f = 10;//block scope
        //var f = 10; //function scope
        f = 10;//global scope
        console.log("Inside", f);
    }
    //console.log("Outside", b)
    // console.log("Outside", f) // not run 
    console.log("Outside", f);

}
fun();

console.log("Global", f);


//function working example

function square_root(n) {
    console.log("In first sqaure root function");

    console.log(Math.sqrt(n));
    return "Hello";
}



//function Hoisting
var sqrt_n = function () {
    console.log("In second sqaure root function");
    console.log(Math.sqrt(n));
    return;
}

square_root(10);
sqrt_n(10);
*/

// Array
let arr = ["Apple", "Guava", "Grapes", "Banana"]
console.log(arr);
console.log(arr["length"]);
console.log(arr.length);
console.log(arr[0]);

for (let i = 0; i < 5; i++) {
    console.log(arr[i]);
}
arr.push("Manago");// adding element
console.log(arr);
arr.pop(); // removing element
console.log(arr);
console.log(arr.indexOf("Grapes"));
arr.shift(); // removing element from the front
console.log(arr);
arr.unshift("Kiwi"); // adding element to the front of the array
console.log(arr);

