// data types (primitive data types)
// String "Pritesh"
// number 2,3,4
// booleans
// undefined
// null
// BigInt
// Symbol

// let age = 22;
// let firstName = "Pritesh";

// console.log(typeof age);

//22->"22"
//Convert number to string
// age = age + ""; first method
// age = String(age);
// console.log(typeof (age));

//convert string to number
// let myStr = "22";
// myStr = +"22"; first method
// myStr = Number(myStr);

// console.log(typeof myStr);


//Undefined
// let myName;
// console.log(typeof myName);
// myName = "Pritesh Mishra";
// console.log(typeof myName, myName); // second print us name
// var, let should be undefined but const must be initialise.

//Null
// let myVariable = null;
//null means nothing 
// console.log(myVariable);
// myVariable = "Pritesh";
// console.log(myVariable);
// console.log(typeof null); // it give object but note that null is not object its only null. This is error in Javascript.

//BigInt
//It is used to store big integer.
//MAX_SAFE_INTEGER is used to determine the maximum number to store.
console.log(Number.MAX_SAFE_INTEGER); //9007199254740991 is output.
let myNumber = BigInt(12); //to make it BigInt we use it like that.
let sameMyNumber = 12n; //second method 
console.log(myNumber + sameMyNumber); //to add must of sam type like this both are BigInt.


// booleans & comparison operator

// booleans
// true, false

// let num1 = 7;
// let num2 = "7";

// console.log(num1<num2);

// == vs ===
// console.log(num1 === num2);

// != vs !==

// console.log(num1 !== num2);


// in javascript == check only value but === this also check type. (same for != and !==)



