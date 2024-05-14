export {};
console.log("Hello world");

let a = 12;

const b:number= 18;


function sum(a:number, b:number):number {
    return a+b;
    }


console.log(sum(a, b));

let firstName:string = "Nitish"
let secondName:string = " Sharma"

let fullName:String = firstName + secondName;
let upperCase = fullName.toUpperCase();
let k = a.toString();
console.log(fullName, fullName.length, a+b, upperCase, fullName+k )


let x = 5;

function isEven(x:number):boolean{
    return x%2 === 0
}

console.log(isEven(x))

function isDivisibleBy4And8(a:number):boolean{
    return (a%4 ===0 && a%8 === 0)
}
console.log(isDivisibleBy4And8(16))

// 2^53 BigInt
let bigNumber:bigint = 9007199254740991n
let bigNumber2:bigint = 90071992547409912n
let bigNumber3 = (Number as any).MAX_SAFE_INTEGER;
console.log(bigNumber+bigNumber2)
console.log(bigNumber3)

//any and unknown
//any can be used for migration js to ts
let myNum:unknown = 6;
myNum = "oggy"
if(typeof myNum === "number"){
    console.log(myNum)
}


