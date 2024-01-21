// In javascript classes are fake

// class CreatUsers{
//     constructor(firstName, lastName,email, age, address){
//         console.log("Constructor Called!");
//         this.firstName=firstName;
//         this.lastName=lastName;
//         this.email=email;
//         this.age=age;
//         this.address=address;
//     }
//     about(){
//         return `${this.firstName} is ${this.age} years old`
//     }
//     is18(){
//         return this.age>=18;
//     }
//     sing(){
//         return "la la la la";
//     }
// }
// const user1=new CreatUsers("Pritesh", "Mishra", "pritesh@PublicKeyCredential.com", "21", "Kushinagar, Kaptangunj");
// console.log(user1.firstName);

class Animal {
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    eat(){
        return `${this.name} is eating`;
    }
    isSuperCute(){
        return this.age<=1;
    }
    iscute(){
        return true;
    }
}

const animal=new Animal("tom",2);
console.log(animal);

//using same things for another class
// class Dog extends Animal{

// }

// const tommy=new Dog("tommy",3);
// console.log(tommy);


// Class Inheritance
class Dog extends Animal{
    constructor(name,age,speed){
        super(name,age); //using super class to use name and age. (inheriting).
        this.speed=speed;
    }
    run(){
        return `${this.name} is running at speed of ${this.speed}`;
    }
}
// note that object and instance are same thing, we call instance in another programming language.
const tommy=new Dog("tommy",3,45);
console.log(tommy);
console.log(tommy.run());
console.log(tommy.eat());
