//function inside function
function app(){
    const myFun=()=>{
        console.log("hello from myFun.");
    }

    const addTwo=(num1,num2)=>{
        return num1+num2;
    }

    const multipy=(num1,num2)=>num1*num2;
    console.log("inside app");
    myFun();
    console.log(addTwo(3,4));
    console.log(multipy(2,4));
}
app();