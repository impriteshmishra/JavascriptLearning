//map method

// const numbers=[1,2,3,4,5];

// const square=function(number){
//     return number*number;
//     // console.log(number*number); // always use return for map method
// }

// // const squareNumber=numbers.map(square); // remember that map always creat separate array.
// // console.log(squareNumber);

// // one more way
// const squareNumber=numbers.map((number)=>{
//     return number*number;
// });
// console.log(squareNumber);

//realistics example

const users=[
    {firstName: "Thor"},
    {firstName: "groot"},
    {firstName: "rocket"},
    {firstName: "iron man"}
]

const userName= users.map((user)=>{
    return user.firstName;
});

console.log(userName);