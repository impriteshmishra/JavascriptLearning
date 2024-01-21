function hello(){
    console.log("Hello World");
}

// javascript function, we can say that function + object, that means in javascript function also work as object.

//console.log(hello.name); // it give name of function.

// we can add our own property.
// hello.myOwnProperty="very unique value";
// console.log(hello.myOwnProperty);

// name property ------> tells function names;

// function provides more usefull properties.

// console.log(hello.prototype);  // {}

// only functions provide prototype property.

hello.prototype.abc="abc";
hello.prototype.xyz="xyz";
hello.prototype.sing=function(){
    return "lalalala";
}
console.log(hello.prototype.sing());