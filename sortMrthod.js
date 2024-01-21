// sort method in javascript

const numbers=[5,9,1200,410,3000];
numbers.sort((a,b)=>{
    // return a-b; //ascending order
    return b-a;//descending order 
})
// numbers.sort((a,b)=>a-b);
console.log(numbers);

//real world example
const products=[
    {productId:1,productName:"p1",price:300},
    {productId:2,productName:"p2",price:3000},
    {productId:3,productName:"p3",price:200},
    {productId:4,productName:"p4",price:8000},
    {productId:5,productName:"p5",price:500}
]
//low  to high
// products.sort((a,b)=>{
//     return a.price-b.price;
// });
// console.log(products);
//above give changes to product thats why we use slice to clone and also to not change the product.

const lowToHigh=products.slice(0).sort((a,b)=>{
    return a.price-b.price;
});
console.log(lowToHigh);

//high to low
const highToLow=products.slice(0).sort((a,b)=>{
    return b.price-a.price;
});
console.log(highToLow);