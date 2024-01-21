//array destructuring
const myArray = ["value1", "value2", "value3","value4"];
// in normal programming languafe--->
// let myVar1 = myArray[0];
// let myVar2 = myArray[1];
// console.log("value of var1:", myVar1);
// console.log("value of var2:", myVar2);
// let [myvar1,myvar2]=myArray;
// console.log("value of myvar1",myvar1);
// console.log("value of myvar2",myvar2);
// let myNewArray=myArray.slice(2);
// console.log(myNewArray);
// we also write same things as by using ...myNewArray
let [myvar1,myvar2, ...myNewArray]=myArray;
console.log("value of myvar1",myvar1);
console.log("value of myvar2",myvar2);
console.log(myNewArray);