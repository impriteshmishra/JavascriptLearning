// function about(hobby,favfood){
//     console.log(this.firstName, this.age, hobby,favfood);
// }

// const user1={
//     firstName: "Pritesh",
//     age:8,
// }

// const user2={
//     firstName:"Ritik",
//     age:7
// }
//Call
// about.call(user2, "cricket","besanLaddo");
// about.call(user1,"win","winner-winner");

//Apply- same as call only difference is in applu we pass in single array.
// about.apply(user1, ["win", "winner-winner"]);
// about.apply(user2,["cricket","besanladoo"]);

//bind

// very important note.
const user1={
    firstName: "Pritesh",
    age: 9,
    about: function(){
        console.log(this.firstName,this.age);
    }
}
const myFunc=user1.about.bind(user1); // must use bind to make like this.
myFunc();
