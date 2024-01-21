// Sets (it is iterable)
//store data
//sets also have its own method
//No index-based access
//order is not guaranteed
// unique items only (no duplicates allowed)

// const numbers =new Set([1,2,3,4,4]);
// console.log(numbers); // duplicate of 4 is eliminated.
const item =["item1","item2","item2","item4"];
const numbers = new Set();
  //we can add separately in set, like
  numbers.add(1);
  numbers.add(2);
  numbers.add(2);//not add due to duplicates
//   numbers.add(["item1","item2"]);
//   numbers.add(["item1","item2"]);//this would be add because this is separated array according to javascript
  numbers.add(item);
//   numbers.add(item);//but if we add two times the single array so it should be not add.

// to check 
// if(numbers.has(1)){
//   console.log("1 is present.")
// }else{
//   console.log("1 is not present.")
// }
// console.log(numbers);

// as we discussed that set is iterable, so on set we use for of loop.
// for(let number of numbers){
//   console.log(number);
// }

//Let's find the length.
const myArray=[1,2,3,4,4,5,6,5,6];
const uniqueElements=new Set(myArray);
let length=0;
for(let element of uniqueElements){
  length++;
}
console.log(length);
