"use strict";
// export{};
console.log("functions");
function greet(name, id) {
    return "Hello " + name + " and your id is " + id;
}
// console.log(greet("Nitish", 1)) 
const hello = (name, id) => `Welcome, ${name} and your id is ${id}`;
console.log(hello("Raj", 2));
//palindrom function
const isPalindrome = (palin) => {
    let myPalin = palin.split("").reverse().join("");
    return myPalin === palin;
};
console.log(isPalindrome("123421"));
