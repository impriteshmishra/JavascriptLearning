// reduce method

// const numbers = [1,2,3,4,5,10];
//  // aim is to do sum of all numbers in array.

//  const sum = numbers.reduce((accumulator,currentValue)=>{
//              return accumulator+currentValue;
//  }, 100/*initial value i.e. accumulator can pass */);
//  console.log(sum);

 //accumulator, currentvalue, return
 // 1                 2         3
 //3                  3         6
 //6                  4         10
 //10                 5          15
 //15                 10         25

 // one real life example
 const usercart=[
      {productId: 1, productName: "mobile", price:12000},
      {productId: 2, productName: "laptop", price:22000},
      {productId: 3, productName: "tv", price:15000},
      {productId: 4, productName: "earbuds", price:2000}   
 ]

 const bill=usercart.reduce((totalPrice, currentProduct)=>{
    return totalPrice+currentProduct.price;
 },0);
 console.log(bill);
