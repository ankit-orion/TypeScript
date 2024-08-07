// here array can be of type string as well as number
const user : (string | number)[] = ["ankit", "mishra", 1, 12];
console.log(user);
// tuples in typescript
// tuples are arrays with fixed number of elements
let Tuser: [string, number, boolean];
// tuple ensures that the order of the elements is fixed
// tuple is all about restricting the number of elements in an array 
// and restricting the user to add only the elements of the specified type
Tuser = ["ankit", 1, true];

let reg : [number, number, string, boolean] = [1, 2, "ankit", true];
console.log(reg);

type person = [number, string];
let person1: person = [1, "ankit"];