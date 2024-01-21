//lexical scope
 const myVar="value1";

function myApp(){

    function myFunc(){
        // const myVar="value1";
        const myFunc2=()=>{
             console.log("inside myFuc",myVar);
        }
        myFunc2();
    }
    
    myFunc();
    console.log(myVar);
}

myApp();