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

// any keyword
let hero; // Variable 'hero' implicitly has an 'any' type, but a better type may be inferred from usage.
function getHero(){
    return "thor";
}
hero = getHero(); // here the hero will be referred to as any type because we have not defined the type of the variable
// we can return any kind of data type from the function and it will be accepted by the variable hero
// so we have to write the type of the variables an any type is a way to define a variable that can be of any type
// another example
let value: number;
function getValue(){
    // return "thor"; // this will return a string but we are storing it in a number type so we have to return a number
    return 5;
}
// value = getValue(); // this will give an error as we are trying to assign a string to a number type variable

// when u don't specify a type, and typescript cannot infer the type, it will assign the type as any
// you usually want to avoid using any as it defeats the purpose of using typescript alsa it is not type-checked



export {} // this is to avoid the error : Cannot redeclare block-scoped variable 'a'.ts(2451)
