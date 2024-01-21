//for of loop.
// const fruits = ["f1", "f2", "f3", "f4", "f5"];
// const fruit2 = [];
// for (let fruit of fruits) {
//     // console.log(fruit.toUpperCase());
//     fruit2.push(fruit);
// }
// console.log(fruit2);

//for in loop.
const fruits = ["f1", "f2", "f3", "f4", "f5"];
const fruit2 = [];

for (let index in fruits) {
    // console.log(index);
    console.log(fruits[index]);
    fruit2.push(fruits[index]);
}
console.log(fruit2);

