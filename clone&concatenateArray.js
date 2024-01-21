// how to clone array

//how to concatenate two array

let array1 = ["item1", "item2"];
// let array2 = array1;
//let array2 = array1.slice(0); //clone the array (new array created) (method1)
// let array2 = array1.slice(0).concat(["item3", "item4"]); //adding new element in clone using conact
// array2.push("item3");

// new method to make clone; // spread operator method.
// let array2 = [...array1];
// array1.push("item4");
// array2.push("item3");
// let array2 = [...array1, "item3", "item4"]; / adding new element.
// using spread operator method creating new array by using two array.
let newArray = ["item_n1", 'item_n2'];
let array2 = [...array1, ...newArray];
console.log(array1 === array2);
console.log(array1);
console.log(array2);