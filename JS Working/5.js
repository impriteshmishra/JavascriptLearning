//lexical environment, scope chain

const lastName="Mishra";

const printName=function(){
    const firstName="Pritesh";
    function myFunction(){
    console.log(firstName);
    console.log(lastName);
    }
    myFunction();
}
printName();

// const lastName="Mishra";

// const printName=function(){
//     const firstName="Pritesh";
//     console.log(firstName);
//     console.log(lastName);
// }
// printName();