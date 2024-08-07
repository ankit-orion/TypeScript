// learning arrats in typescript
// creating an array of superheros
// let superheros = ["thor", "ironman", "captain america"];
// superheros.push("hulk");
// console.log(superheros);
// we should not define the array as const because we are changing the array
const superHeroes: string[] = ["thor", "ironman", "captain america"];
// syntax: const arrayName: type[] = ["value1", "value2", "value3"];
const heroPower: Array<number> = [100, 200, 300]; // we can defind array in this way also
// syntax: const arrayName: Array<type> = [value1, value2, value3];
type User = {
    name: string;
    email: string;
    isPaid: boolean;
};
const allUsers: User[] = [];

// we can also define a 2D array in typescript
const MLModels: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

allUsers.push({name: "ankit", email: "ankit@mail", isPaid: true});