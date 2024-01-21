//Intro to Array
//reference type
// how to create array

//ordered collections of items

// let fruits = ["Apple", "Mango", "Grapes"];
// let number = [1, 2, 3, 4, 5];
// let mixed = [1, 2, 3, 4, 5, "string", null, undefined];
// console.log(mixed);
// console.log(number);
// console.log(fruits[0]);

// let fruits = ["Apple", "Mango", "Grapes"];
// let obj = {}; // object literal
// console.log(fruits);
// fruits[0] = "banana";
// console.log(fruits);

// console.log(typeof fruits);
// console.log(typeof obj);
// console.log(Array.isArray(fruits));
// console.log(Array.isArray(obj));


// Array push pop
// Array shift unshift

// let fruits = ["apple", "mango", "grapes"];
// console.log(fruits);
// //push
// fruits.push("guava");
// console.log(fruits);
// //pop
// // fruits.pop(); // simply pop
// let popedefruit = fruits.pop(); // storing poped element in variable.
// console.log("The poped fruit is", popedefruit);
// // console.log(fruits);


//unshift
// it is used to add element in starting of array.
// let fruits = ["apple", "mango", "grapes"];
// fruits.unshift("banana");
// console.log(fruits);

//shift 
//it is used to remove element from starting.
let fruits = ["apple", "mango", "grapes"];
// fruits.shift(); // 
let shiftfruit = fruits.shift(); // storing the shifted element in variable.
console.log("Shifted fruit is ", shiftfruit);

// Note thst push and pop is faster than shift and unshift