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
type User = {
    name: string;
    email: string;
    isPaid: boolean
}
// advantage of using type alias is that we can use it in multiple places
function createUser1(user: User): User{
    console.log(`name: ${user.name}, email: ${user.email}, isPaid: ${user.isPaid}`);
    return {name: user.name, email: user.email, isPaid: user.isPaid};
}
createUser1({name: "ankit", email: "ankit@mail", isPaid: true});

export{}