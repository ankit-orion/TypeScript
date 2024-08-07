let score: number | string | boolean = 33; // we can define a variable with multiple types
score = "thirty three";
console.log(score);
type user = {
    name: string;
    id: number;
}
type Admin = {
    username: string;
    id: number;
}
// we can define a variable with multiple types 
// here hitesh can have a name as well as username and id
let hitesh : user | Admin = { name: "hitesh", id: 1};
hitesh = {username: "hitesh123", id: 1};
console.log(hitesh);

function getDbId(id: number | string){
    // making some api calls
    console.log(`id is ${id}`);
    
}
getDbId(1);
getDbId("1");