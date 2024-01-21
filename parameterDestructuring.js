//Prameter Destructuring

// use in object and react

const person={
    firstName: "Pritesh",
    gender: "male",
    age: "100",
    work: "Scientist",
}
// function printDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
// }
// printDetails(person);

function printDetails({firstName,gender,age,work}){
       console.log(firstName);
       console.log(gender);
       console.log(age);
       console.log(work);
    }
printDetails(person);