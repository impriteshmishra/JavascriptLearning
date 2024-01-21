//nested destructuring
const users=[
    {userId: 1, firstName:"Hello1", gender:"male"},
    {userId: 2, firstName:"Hello2", gender:"male"},
    {userId: 3, firstName:"Hello3", gender:"male1"},
]

// const [user1,user2,user3]=users;
// console.log(user1);
// const [{firstName},user1,{gender}]=users; // inside the object
// console.log(firstName);
// console.log(gender);
// const [{firstName}, ,{gender}]=users; //skiping
// console.log(gender);

const [{firstName: user1Firstname,userId:userid}, ,{gender:user3}]=users;
console.log(user1Firstname);
console.log(user3);
console.log(userid)
