// Optional Chaining

const user={
    firstName: "Pritesh",
    // address:{housenumber: '1234'},
}
// console.log(user.firstName);
// console.log(user.address.housenumber);

// suppose karo koi things hum acces karna chah rahe hai but wo defined nahi programm meing. iske karan program meing error dedega to isko solve karne ke liye optional chaining ka us ekarte hai. agar defined hoga o show karega nahi to undefined show karega, to in future agar wo add hota hai to apneapp acces kar lega.
console.log(user?.firstName);
console.log(user.address?.housenumber);