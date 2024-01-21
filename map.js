// Maps
// map is an iterable

// store data in ordered fashion

// store key value pair (like object)
// duplicate keys are not allowed like objects


// different between maps and objects

// objects can only have string or symbol
// as key 

// in maps you can use anything as key
// like array, number, string 



// key value pair
// const person=new Map();
// person.set('firstName','Pritesh');
// person.set('age',7);
// person.set(1,'one');
// person.set([1,2,3],'onetwothree');
// person.set({1:'one'},'onetwothree');
// console.log(person);
// console.log(person.get('firstName'));
  //to get key
// console.log(person.keys());  
// for(let key of person.keys()){
//     console.log(key, typeof key);
// }


// for( [key,value] of person){
//     // console.log(Array.isArray(key));
//     console.log(key,value);
// }

// we also use as key value pair fo array
// const person=new Map([['firstName','harshit'],['age', 7]]);
// console.log(person);

const person1={
    id:1,
    firstName: "harshit"
}

const person2={
    id:"2",
    firstName:"Mishra"
}

const extraInfo=new Map();
extraInfo.set(person1, {age:8, gender: "male"});
extraInfo.set(person2,{age: 9,gender: "female"});
// console.log(extraInfo);
console.log(person1.id);
console.log(extraInfo.get(person1).gender);
console.log(extraInfo.get(person2).gender);






















// one thing remember that 99.9% of key stored as string and 0.1% of key stored as symbol.
// const person ={
//     firstName: "Pritesh",
//     age: 7,
//     1:"one"
// }
// // console.log(person.firstName);
// // console.log(person["firstName"]);
// for(let key in person){
//     console.log(typeof key);
// }
