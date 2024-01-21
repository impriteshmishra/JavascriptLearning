//static methods and properties.
class Person {
    constructor(firstName, lastName, age) {
        console.log("Constructor Called!");
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    about() {
        return `${this.firstName} is ${this.age} years old`
    }

    //staic
    static classinfo() {
        return "this is person class.";
    }

    static desk="Static Property."
    is18() {
        return this.age >= 18;
    }
    sing() {
        return "la la la la";
    }
    eat() {
        return `${this.firstName} is eating`;
    }
    isSuperCute() {
        return this.age <= 1;
    }
    iscute() {
        return true;
    }
}
const person1 = new Person("Pritesh", "Mishra", 9);
// console.log(person1.eat());
console.log(Person.classinfo());
// Or
const info=Person.classinfo();
console.log(info);
// console.log(person1.desk); // undefined due to person1 have not desk.
console.log(Person.desk);// Class Person have desk so it called by only Person.