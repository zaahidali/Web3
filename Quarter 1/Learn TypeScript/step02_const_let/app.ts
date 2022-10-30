// let and const


// let
// let is block scoped and can be re-assigned a value later on in the program flow 
let fName: string = "John";
console.log(typeof fName, fName);
fName = "Mary";
console.log("********************************");
console.log("Value of fName after reassignment: ", fName);

if (true) {
  let lastName = "Cena";
} else {
  let lastName = "UnderTaker";
}
// console.log(lastName); // error because lastName is block scoped


// Const
// const is immutable and cannot be reassigned a new value after declaration 
console.log("********************************");
console.log("Constant variable");
const lName: string = "Cena";
console.log(typeof lName, lName);
// lName = "UnderTaker"; // error because lName is a constant variable
