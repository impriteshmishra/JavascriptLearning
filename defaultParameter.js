//default parameter
 
  // old ways to give default parameter
//   function addTwo(a,b){
//     if(typeof b==="undefined"){
//         b=0;
//     }
//     return a+b;
//   }
//   const ans=addTwo(4);
//   console.log(ans);

//New way to give default parameter
function addTwo(a,b=0){   //b is declared 0 as default
    return a+b;
}
const ans=addTwo(4);
console.log(ans);

