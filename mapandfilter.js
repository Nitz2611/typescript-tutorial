"use strict";
const numbers = [1, 2, 3, 4, 5];
//? doubling each number
const doubleData = numbers.map((currval) => currval * 2);
console.log(doubleData);
// converting numbers to strings
const numberToString = numbers.map((curElm) => curElm.toString());
console.log(numberToString);
//filter method
// Number is even
const evenNumber = numbers.filter((curElm) => curElm % 2 === 0);
console.log(evenNumber);
//Filtering numbers greater than 3 
const numberGrt3 = numbers.filter((e) => e > 3);
console.log(numberGrt3);
