//callback function
function myFunc2(name){
    console.log("inside myFunc2.");
    console.log(`your name is ${name}`);
}
function myFunc(callback){
    console.log("hello this is myFunc");
    callback("Pritesh");
    // console.log("inside myFunc.");
}

myFunc(myFunc2);