// closures

// function can return functions


// function printFullName(firstName, lastName){
//     function printName(){
//         console.log(firstName,lastName);
//     }
//     return printName;
// }
// const ans=printFullName("Pritesh","Mishra");
// // console.log(ans);
// ans();

//e.g. 1
// function hello(x){
//     const a="varA";
//     const b="varB";
//     return function(){
//         console.log(a,b,x);
//     }
// }

// const ans = hello("arg");
// ans();

//e.g. 2
// function myFunction(power) {
//     return function (number) {
//         return number ** power;
//     }
// }


// lets write equvalent code for function of e.g. 2 which is too small

// const myFunction = (power) => (number)=>number ** power;
// we can also remove brackets
// const myFunction = power => number => number ** power; // dont be confused, this is experienced ,ethod to write above function.



// const square = myFunction(2);
// const ans = square(3);
// console.log(ans);


// const cube = myFunction(3);
// const ans1 = cube(3);
// console.log(ans1);


//e.g. 3
function func(){
    let counter=1;
    return function(){
        if(counter<2){
            console.log("Hi you called me.");
            counter++;
        }
        else{
            console.log("Mai already called ho chuka hu.");
        }
    }
}
const myFunc=func();
myFunc();
myFunc();
myFunc();
