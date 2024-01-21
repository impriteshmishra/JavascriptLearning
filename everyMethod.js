// every method 
// every means to check every elements
// const numbers=[2,4,6,8,10];
// const ans=numbers.every((number)=>number%2===0);
// // callback function ---> true/false (boolean)
// //every method---> true/false (boolean)
// console.log(ans);

//real example
const usercart=[
    {productId:1,productName:"mobile",price:"12000"},
    {productId:2,productName:"laptop",price:"40000"},
    {productId:3,productName:"tv",price:"15000"},
    {productId:4,productName:"earbuds",price:"1000"}
]
const ans =usercart.every((cartname)=>cartname.price<30000);
console.log(ans);