// syntax of a variable declaration in typescript
// let variableName: type = value;
let a: number = 5;
let b: number = 6;
let c: number = a + b;
console.log(c);

// another declaration
let greetings : string = "Hello Ankit";

//greetings = "Hello World"; //we are allowed to this but we cannot change the type of the variabel from string to any other data types
console.log(greetings);

let num: number = 5; // since it it too obvious that num is a number, we can remove the type and it will still work
// let num = 10; // this is allowed as num is a number
// num.toUppercase(); // this will give an error as number does not have a method toUppercase  
num = 56.75; // this is allowed as number can be a float as well

// we don't have to specifically define int and float in typescript because we have only one type number and it automatically takes care of it
let loggedIn: boolean = true;
console.log(loggedIn);
export {} // this is to avoid the error : Cannot redeclare block-scoped variable 'a'.ts(2451)
