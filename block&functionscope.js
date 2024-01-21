// block scope and function scope

//let and const are block scope
//var is function scope

//block 1
// // var name1="good";
// {
//     var name1="good";
//     let firstName="Hello";
//     const lastName="world";
//     console.log(firstName);
//     console.log(lastName);
//     console.log(name1);
// }
// //block 2
// {
//     let firstName="Hello";
//     const lastName="world";
//    console.log(firstName);
//    console.log(lastName);
//    console.log(name1);
// }
// console.log(name1);

//didnt work for const and let
// function myApp(){
//     if(true){
//         const firstName="Pritesh";
//         console.log(firstName);
//     }
//     if(true){
//         console.log(firstName);
//     }
//     console.log(firstName);
// }
// myApp(); 

//work for var
function myApp(){
    if(true){
        var firstName="Pritesh";
        console.log(firstName);
    }
    if(true){
        console.log(firstName);
    }
    console.log(firstName);
}
myApp();