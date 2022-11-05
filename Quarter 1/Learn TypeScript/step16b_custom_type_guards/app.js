"use strict";
// custom type guard or interface
// In TypeScript, we can define our own type using interface or type alias.
// Interface is a structural type system. It is used to define the structure of an object.
// It uses duck typing. Duck typing is a style of dynamic typing in which an object's suitability is determined by the presence of certain methods and properties,
// rather than the type of the object itself.
// It does not generate any code at runtime.
// 1. Example one
console.log("\n********** Interface Example 1 **********");
let person = {
    name: "Zahid",
    age: 22,
    country: "USA",
};
console.log(person.name, person.age, person.country);
// 2. Example two with optional property
console.log("\n********** Interface Example 2 **********");
let person2 = {
    name: "Zahid",
    age: 22,
};
console.log(person2.name, person2.age, person2.country); // country is undefined so it will print undefined
// let person3: Person3{
// description: "This is a person" // will give error because description is not defined in interface
// }
// console.log(person3.description); // all are undefined
// 4. Interface with in operator
// check it with same property name in different interface
console.log("\n********** Interface with in operator **********");
let person4 = {
    name: "Zahid",
    age: 22,
};
let earth = {
    city: "New York",
    country: "USA",
};
function checkProperty(obj) {
    if ("age" in obj) {
        console.log(`Age is ${obj.age} and is of a person`);
    }
    if ("city" in obj) {
        console.log(`City is ${obj.city} and called from Earth`);
    }
}
checkProperty(earth);
checkProperty(person4);
// 5. interface with same property name and using in operator
console.log("\n********** Interface with same property name **********");
let samePropertyObj1 = {
    name: "Property 1 name",
    location: "Property 1 location",
};
let samePropertyObj2 = {
    name: "Property 2 name",
    location: "Property 2 location",
};
function checkSameProperty(obj) {
    if ("name" in obj) {
        console.log(`It is called from ${obj.name}`);
    }
}
checkSameProperty(samePropertyObj1);
checkSameProperty(samePropertyObj2);
// 6. interface with type guard function
console.log("\n********** Interface with type guard function **********");
let typeGuardObj1 = {
    name: "Property 1 name",
    location: "Property 1 location",
};
let typeGuardObj2 = {
    age: 22,
    location: "Property 2 location",
    name: "Accessing the name property",
};
function isTypeGuard2(obj) {
    console.log(obj);
}
console.log("\nSecond object");
isTypeGuard2(typeGuardObj2);
console.log("\nFirst object");
isTypeGuard2(typeGuardObj1);
