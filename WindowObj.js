// if we use this like this, so we get window object. To solve this problem must use"use strict".

// function myFunc(){
//     console.log(this);
// }
// myFunc();
function myFunc(){
    "use strict"
    console.log(this);
}
myFunc();