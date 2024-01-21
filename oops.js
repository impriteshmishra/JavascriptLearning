// Object oriented programming in javascript
//allow to creat object without defining class
//one of way creating javascript (JSON) - javascript object notation

//Anathor way
function Fruit(taste, colour) {
    this.colour = colour;
    this.taste = taste;
}

//new keyword
let mango = new Fruit("sweet", "Yellow");
let orange = new Fruit("Sour", "Orange");

//One way
var apple = {
    taste: "Sweet",
    colour: "Red",
}

console.log(apple);
console.log(mango);
console.log(orange);

//Class keyword (ECMAScript 2015)

//Class declaration (Not Hoisted)
class FruitClass {
    constructor(taste, colour) {
        this.colour = colour;
        this.taste = taste;
    }
};
//Function - declaration, function expression
let kiwi = new FruitClass("Sour", "Green");


//calss expression (Not Hoisted)
let FruitClass2 = class {
    constructor(taste, colour) {
        this.colour = colour;
        this.taste = taste;
    }
};

//Function - declaration, function expression
let kiwi2 = new FruitClass2("Sour", "Green");

console.log(kiwi);
console.log(kiwi2);






/*var bird = {
    x: 100,
    y: 20,
    colour: "Blue",
    eggs: ["One", "Two", "Three"],

    //Creating method inside it
    fly: function () {
        console.log("Bird is flying.", this.x, this.y);
    }
};

//for loop
for (let i = 0; i < bird.eggs.length; i++) {
    console.log(bird.eggs[i]);
}

//for each loop
bird.eggs.forEach(function (val, idx) {
    console.log(idx, val);
});
*/