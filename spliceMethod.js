//Splice method
// start,delete,insert

const myArray=["item1","item2","item3","item4"];

//delete
// const deleteItem=myArray.splice(1,2);
// console.log(myArray);
// console.log(deleteItem); // deleted item stored in it.

//insert
// myArray.splice(1,0,"inserted item");
// console.log(myArray);

//insert and delete
const deleteditem=myArray.splice(1,2,"inserted item","i2","try"); //we can store deleted item
console.log(myArray);
console.log(deleteditem);