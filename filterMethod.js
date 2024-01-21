//filter method

const numbers =[1,2,3,4,5,6,7,8];

const isOdd=function(number){
    return number%2!==0;
}
 const oddNumbers = numbers.filter(isOdd);
 console.log(oddNumbers);