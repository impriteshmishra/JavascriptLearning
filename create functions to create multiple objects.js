// const user1={
//     firstName: "Pritesh",
//     lastName: "Mishra",
//     email:"priteshmishra2125@gmail.com",
//     age:2,
//     address: "HouseNo., Colony, Pin Code, State",
//     about: function(){
//         return `${this.firstName} is ${this.age} year old.`
//     },
//     is18: function(){
//         return this.age>=18;
//     }
// }

//1. function (that function create object)
//2. add key value pair
//3. object ko return karega
function createUser(firstName, lastName, email, address, age){
    const user={};
    user.firstName=firstName;
    user.lastName=lastName;
    user.email=email;
    user.address=address;
    user.age=age;
    user.about=function(){
        return `${this.firstName} is ${this.age} year old.`
    };
    user.is18=function(){
        return this.age>=18;
    };
    return user;
}

const user1=createUser("Pritesh","Mishra","pritesh@gmail.com","address", 18);
console.log(user1);
const is18=user1.is18();
console.log(is18);
const about=user1.about();
console.log(about);