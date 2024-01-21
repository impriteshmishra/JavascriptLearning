// important array method

const numbers = [1,2,3,4];

// function myFunc(number, index){
//     console.log(`index is ${index} number is ${number}`);
// }

// for(let i =0;i<number.length;i++){
//     myFunc(number[i],i);
// }

//forEach method

// numbers.forEach(myFunc);

// numbers.forEach(function(number,index){
//     console.log(`index is ${index} number is ${number}`);
// });

// example to multiply by 2
// numbers.forEach(function(number){
//     console.log(`the ${number} multipy by 2 is ${2*number}`);
// });

const users=[
    {firstName: "Thor"},
    {firstName: "groot"},
    {firstName: "rocket"},
    {firstName: "iron man"}
]

// users.forEach(function(user){
//     console.log(user.firstName);
// });
    //also we can use for of loop
    for(let user of users){
        console.log(user.firstName);
    };
