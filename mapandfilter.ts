const numbers: number[] = [1,2,3,4,5]

//? doubling each number

const doubleData:number[] = numbers.map((currval:number) => currval *2)

console.log(doubleData)

// converting numbers to strings

const numberToString = numbers.map((curElm) => curElm.toString());

console.log(numberToString)

//filter method

// Number is even

const evenNumber: number[] = numbers.filter((curElm) => curElm%2===0)

console.log(evenNumber)

//Filtering numbers greater than 3 

const numberGrt3: number[] = numbers.filter((e) => e>3)

console.log(numberGrt3)