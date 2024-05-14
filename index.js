"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hello world");
let a = 12;
const b = 18;
function sum(a, b) {
    return a + b;
}
console.log(sum(a, b));
let firstName = "Nitish";
let secondName = " Sharma";
let fullName = firstName + secondName;
let upperCase = fullName.toUpperCase();
let k = a.toString();
console.log(fullName, fullName.length, a + b, upperCase, fullName + k);
let x = 5;
function isEven(x) {
    return x % 2 === 0;
}
console.log(isEven(x));
function isDivisibleBy4And8(a) {
    return (a % 4 === 0 && a % 8 === 0);
}
console.log(isDivisibleBy4And8(16));
// 2^53 BigInt
let bigNumber = 9007199254740991n;
let bigNumber2 = 90071992547409912n;
let bigNumber3 = Number.MAX_SAFE_INTEGER;
console.log(bigNumber + bigNumber2);
console.log(bigNumber3);
//any and unknown
//any can be used for migration
let myNum = 6;
