// const User = {
//     name: "ankit",
//     email: "ankit@mail",
//     isPaid: false
// }
// console.log(User);

// usecase of objects is to store the data in a structured way or we pass into any function or we can return from any function
// function createUser({ name, isPaid, email }: { name: string; isPaid: boolean; email: string }) {
//     console.log(`name: ${name}, email: ${email}, isPaid: ${isPaid}`);
// }

// let newUser = { name: "ankit", isPaid: true, email: "ankit@mail" };
// createUser(newUser);

// function createCourse():{
//     name: string,
//     price: number
// }{
//     return {name: "typescript", price: 100};
// }

// type alias - a way to define a type that can be used in multiple places
// type User = {
//     name: string;
//     email: string;
//     isPaid: boolean
// }
// // advantage of using type alias is that we can use it in multiple places
// function createUser1(user: User): User{
//     console.log(`name: ${user.name}, email: ${user.email}, isPaid: ${user.isPaid}`);
//     return {name: user.name, email: user.email, isPaid: user.isPaid};
// }
// createUser1({name: "ankit", email: "ankit@mail", isPaid: true});

//! read only
type User = {
    readonly _id: string; // readonly is a way to make the variable immutable meaning it cannot be changed
    name: string;
    email: string;
    isActive: true;
    creditCard ?: number; // ? is a way to define an optional property in the object 
}

let myUser: User = {
    _id: "123",
    name: "ankit",
    email: "ankit@mail",
    isActive: true
}

type cardNumber = {
    cardNumber: string
}
type cardDate = {
    cardDate: string
}
// type cardCvv = {
//     cardCvv: string
// }

// creating new type based on the existing types
type cardDetails = cardNumber & cardDate & {cvv: number};
let mycard = {
    cardNumber: "1234567890",
    cardDate: "12/23",
    cardCvv: 242
}
console.log(mycard);

// so if we want to give credit card info to the user we can do that but it is optional so we can skip that as well

let myUser1: User = {
    _id: "123",
    name: "ankit",
    email: "ankit@mail",
    isActive: true,
    creditCard: 1234567890
}
//myUser._id = 223; // here we cannot change the value of _id as it is readonly
// rest other values can be changed 
myUser.name = "ankit mishra";
console.log(myUser);
console.log(myUser1);


export{}