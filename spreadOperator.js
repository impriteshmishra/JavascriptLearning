//spread operator in case of array
// const array1=[1,2,3];
// const array2=[5,6,7];
// const newArray=[...array1,...array2,66,88,66];
// // const newArray=[...array1];
// //  const newArray=[..."1234567"];
// console.log(newArray);

//spread opearator in case of object
const obj1={
    key1: "value1",
    key2: "value2",
};
const obj2={
    key1: "valueUnique",
    key3: "value3",
    key4: "value4",
};

// const newObject={...obj2,...obj1};
//we also add new key, like
const newObject={...obj2,...obj1, key55:"hello"};
console.log(newObject);
// we also use to get the index according to element
const newObject2={..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"}; 
console.log(newObject2);
// we aslo use like this in array
const newArray3={...["item1","item2","item3","item4"]}
console.log(newArray3);