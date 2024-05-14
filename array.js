"use strict";
const num = [1, 2, 3, 4];
const num1 = new Array(1, 2, 3, 4, 5);
const names = Array.of("Nitish", "Rashmika", "love");
names.forEach(e => {
    console.log(e);
});
for (const i of num) {
    // console.log(i)
}
const updatedNum = num.push(8);
console.log(updatedNum);
console.log(num);
