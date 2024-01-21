//difference between dot and bracket notation
const key="email";
const person={
    name:"Pritesh",
    age:"21",
    //want to use like person hobbies, so we use ""
    "person hobbies":["streaming","cooking","reading books"]
}

console.log(person["person hobbies"]);
    //including email in objects
    person[key]="priteshmishra2125@gmail.com";
    console.log(person);