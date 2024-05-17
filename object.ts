// typealias this is typescript feature
//if we want to create more than one object with same property we can define typealias at beginning

type Person = {
    name: string;
    age: number;
    isStudent: boolean;
}

//object

// const person:{
//     name:string;
//     age:number;
//     isStudent:boolean
// } = {
//     name : "Nitish",
//     age: 25,
//     isStudent: false

// }
// now we can write this as 
// so we dont have define the type everytime
const person:Person = {
    name: 'Nitish',
    age: 25,
    isStudent: false
}

console.log(person)