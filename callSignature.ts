type Student = {
    name: string;
    age: number;
    gender?: string; //optional
    greet: (country:string) => string  //method call signature
}

const student1:Student = {
    name: "Nitish",
    age:25,
    greet: ((country): string => `my name is ${name} my country is ${country}`)
}

const introduction: (student1: Student) => string = (student1:Student): string => {
    const {name, age} = student1;
    return `Welcome my name is ${name}, I am ${age}ysr old`;
}