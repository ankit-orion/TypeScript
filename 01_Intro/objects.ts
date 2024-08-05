// const User = {
//     name: "ankit",
//     email: "ankit@mail",
//     isPaid: false
// }
// console.log(User);
// usecase of objects is to store the data in a structured way or we pass into any function or we can return from any function
function createUser({ name, isPaid, email }: { name: string; isPaid: boolean; email: string }) {
    console.log(`name: ${name}, email: ${email}, isPaid: ${isPaid}`);
}

let newUser = { name: "ankit", isPaid: true, email: "ankit@mail" };
createUser(newUser);

function createCourse():{
    name: string,
    price: number
}{
    return {name: "typescript", price: 100};
}
export{}