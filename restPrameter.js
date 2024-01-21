//rest Parameter

// function myFunc(a,b,...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ${c}`);
// }
// myFunc(1,2,3,4,5,6,7,8,9,); //rest of number stored in ...c

function addAll(...numbers){
    let total=0;
    for(let number of numbers){
        total+=number;
    }
    return total;
}
console.log(addAll(1,2,3,4,5,6,7,8,9));