// function expression 
// const singHappyBirthday = function(){
//     console.log("happy birthday to you ......");
// }
//Now converting it into arrow function.
// function expression 
const singHappyBirthday = ()=>{
    console.log("happy birthday to you ......");
}
singHappyBirthday();

const isEven=(number)=>{
    return number%2===0;
}
console.log(isEven(10));

const findTarget=(array,target)=>{
    for(let i=0;i<array.length;i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}
let array=[1,2,3,4,5,6,7,];
console.log(findTarget(array,5));

// const firstChar=(anyString)=>{
//     return anyString[0];
// }
// let Name="Hello";
// console.log(firstChar(Name));

//if we want so we write function like this in one line
const firstChar=anyString=> anyString[0]; //we remove bracket only for one parameter. Also no need to return the function because it alreday return in one line
console.log(firstChar("Pritesh"));
