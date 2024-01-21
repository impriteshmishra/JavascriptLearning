// how to iterate object
const person={
    name: "Pritesh",
    age: 21,
    "person hobbies": ["cooking","streaming","chess"]
}
//two methods to iterate
  //for in loop
  //object.keys

// for(let chabhi in person){
//   //console.log(person[chabhi]);
//  //console.log(`${chabhi}: ${person[chabhi]}`); //printing only
//        console.log(chabhi,":",person[chabhi]);
// }

// // console.log(Object.keys(person));
// console.log(Object.keys(person));
// console.log(typeof (Object.keys(person)));
// // now we have to verify that these are array so,
// const val=Array.isArray((Object.keys(person)));
// console.log(val);

for(let key of Object.keys(person)){
    console.log(person[key]);
}