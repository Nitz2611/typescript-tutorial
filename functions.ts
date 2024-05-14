// export{};
console.log("functions")

function greet(name:string, id:number):string{
    return "Hello "+ name + " and your id is "+ id
}

// console.log(greet("Nitish", 1)) 

const hello = (name:string,id:number):string => `Welcome, ${name} and your id is ${id}`
    
 
 console.log( hello("Raj", 2)) 

 //palindrom function

 const isPalindrome = (palin:string):boolean => {
    let myPalin = palin.split("").reverse().join("");
    return myPalin === palin;
 }
 console.log(isPalindrome("123421"))