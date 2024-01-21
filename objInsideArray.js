//Objects inside array
//very useful in real world application

const users=[
    {userId: 1, firstName:"Hello1", gender:"male"},
    {userId: 2, firstName:"Hello2", gender:"male"},
    {userId: 3, firstName:"Hello3", gender:"male"},
]
// console.log(users);
for(let user of users){
    // console.log(user);
    console.log(user.firstName);
}