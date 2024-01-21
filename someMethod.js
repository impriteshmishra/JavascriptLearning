//some method

// const number=[3,14,11,9];
// const ans=number.some((number)=>number%2===0); // if any number is even so it return true
// console.log(ans);

const usercart=[
    {productId:1,productName:"mobile",price:"12000"},
    {productId:2,productName:"laptop",price:"40000"},
    {productId:3,productName:"tv",price:"15000"},
    {productId:4,productName:"earbuds",price:"1000"},
    {productId:4,productName:"mackbook",price:"290000"}
]

const ans=usercart.some((cartitem)=>cartitem.price>100000);
console.log(ans);