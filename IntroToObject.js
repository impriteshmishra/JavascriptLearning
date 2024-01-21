// Objcet also a refernce type.
//arrays are good but not sufficient.
//for real world data.
//objects store key value pair.
//objects dont have index.

//how to creat objects
const person={
    name:"Pritesh",
    age:"21",
    hobbies:["Cooking","Streamming_Documentary", "Vide_Game"]  
}
console.log(person);

//how to access data from objects
console.log(person.name);
console.log(person.age);
console.log(person.hobbies);
    //we also access data by using bracket notation on the place dot notation
    console.log(person["name"]);

//how to add key value pair to objects
person.gender="male";
 // adding key value by using bracket notation
 person["location"]="Earth";
console.log(person);