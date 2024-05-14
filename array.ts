
const num:number[] = [1,2,3,4]

const num1:number[] = new Array(1,2,3,4,5)

const names:string[] = Array.of("Nitish", "Rashmika", "love")


names.forEach(e => {
    console.log(e)
});

for (const i of num) {
    // console.log(i)
}

const updatedNum = num.push(8);
console.log(updatedNum)
console.log(num)