// primitive vs reference data type

//primitive 
let num1 = 6;
let num2 = num1;
console.log("Value of num1 is", num1);
console.log("Value of num2 is", num2);
num1++;
console.log("after increment");
console.log("Value of num1 is", num1);
console.log("Value of num2 is", num2); // this not change due to primitive type

//refernece type
//array
let array1 = ["item1", "item2"];
let array2 = array1;
console.log("array1", array1);
console.log("array2", array2);
array1.push("item3");
console.log("after pushing element to array 1.")
console.log("array1", array1);
console.log("array2", array2);// change due to reference type.