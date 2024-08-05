// function addTwo(num){
//     return num + 2;
// }
// this is the same function but we have to specify the type of the variable otherwuise it will refer to any type
function addTwo(num: number){
    // it might be the case we are accepting a number but we will return a string so we have to specify the return type as well
    // syntax: function functionName(variableName: type): returnType
    return num + 2;
}

function getUpper(val: string){
    return val.toUpperCase();
}
let result = getUpper("hello, my name is ankit mishra");
console.log(result);

function SignUpUser(name: string, email: string, isPaid: boolean){
    console.log(`name: ${name}, email: ${email}, isPaid: ${isPaid}`);
}

let loginUser = (name: string, email: string, isPaid: boolean) =>{
    console.log(`user logged in successfully: User data is name: ${name}, email: ${email}, isPaid: ${isPaid}`);
}

loginUser("ankit", "ankit@mail", false);
SignUpUser("ankit", "ankitmishra@gmail.com" , true);
addTwo(5);

// it might be the case we are accepting a number but we will return a string so we have to specify the return type as well
// syntax: function functionName(variableName: type): returnType
function add(num: number): number{
    return num + 2;
}
let result1 = add(5);
function CheckVote(age: number): number{
    if(age > 18){
        return 1;
    }else{
        return 0;
    }
}
// here we are trying to return a string but the return type is number so it will give an error
// so in case we want to return both the string and number we have to specify the return type as any
//     if(age > 18){
//         return 1;
//     }
//     return "You cannot vote";
// }
// syntax: in case you are using arrow function and you want to specify the return type
const getHello = (s:string):string =>{
    return "hello" + s;
}

// maps in typescript
const heros = ["thor", "ironman", "captain america"];
let res = heros.map((hero):string => {
    return `hero is ${hero}`;
})
console.log(res);

// here we need to mention void since it is not returning anything
function consoleError(errmsg: string): void{
    console.error(errmsg);
}
// never is a type that is used when we are sure that the function will never return anything
// we don't write console.log in the function because it will return undefined
function handleError(errmsg: string): never{
    throw new Error(errmsg);
}
export {}