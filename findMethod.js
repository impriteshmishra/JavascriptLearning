// find method

// const myArray=["Hello","cat","dog","Lion"];

// function isLength3(string){
//     return string.length===3;
// }
// // const ans=isLength3("hello");
// const ans=myArray.find(isLength3); //only give first occurrence.
// console.log(ans);

const users=[
    {userId:1,userName:"Pritesh"},
    {userId:2,userName:"yuvraj"},
    {userId:3,userName:"sangam"},
    {userId:4,userName:"Rahul"}
];
const myUser=users.find((user)=>user.userId===3);
console.log(myUser);
