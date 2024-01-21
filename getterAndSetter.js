//getter and setter
class Person{
    constructor(firstName,lastName,age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(fullName){
        const[firstName,lastName]=fullName.split(" ");
        this.firstName=firstName;
        this.lastName=lastName;
    }
}

const person1=new Person("Pritesh","Mishra", 21);
// console.log(person1.fullName()); dont need to use () because we use get.
// console.log(person1.fullName);

person1.fullName="Shikhar Mishra";
console.log(person1);
console.log(person1.fullName);
