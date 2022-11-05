"use strict";
// union types
// A union type is a type formed from two or more other types, representing values that may be any one of those types.
// 1. Union type with string and number
console.log("********** Union Type **********");
function getAge(age) {
    if (typeof age === "string") {
        return `Age is ${age}`;
    }
    else if (typeof age === "number") {
        return `Age is ${age}`;
    }
    return "Age value does not exist";
}
console.log(getAge("Twenty Two"));
console.log(getAge(22));
// 2. Union type with string and number and boolean
console.log("\n********** Union Type with string and number and boolean **********");
function getAge2(age) {
    if (typeof age === "string") {
        return `Age is ${age}`;
    }
    else if (typeof age === "number") {
        return `Age is ${age}`;
    }
    else if (typeof age === "boolean") {
        return `Age value does exist and it is 22`;
    }
}
console.log(getAge2("Twenty Two"));
console.log(getAge2(22));
console.log(getAge2(true));
// 3. Add union type to function parameter
console.log("\n********** Add union type to function parameter **********");
function addWithUnionType(val1, val2) {
    if (typeof val1 === "string" && typeof val2 === "string") {
        return val1 + " " + val2;
    }
    else if (typeof val1 === "number" && typeof val2 === "number") {
        return val1 + val2;
    }
    else if (typeof val1 === "boolean" && typeof val2 === "boolean") {
        return val1 && val2;
    }
    return undefined;
}
console.log(addWithUnionType("Ali", "Zahid"));
console.log(addWithUnionType(10, 20));
console.log(addWithUnionType(true, false));
// 4. Union type with class
console.log("\n********** Union Type with class **********");
class Bunny {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getBunnyInfo() {
        return `Name: ${this.name} Age: ${this.age}`;
    }
}
class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getCatInfo() {
        return `Name: ${this.name} Age: ${this.age}`;
    }
}
let pet = new Bunny("Bunny", 2);
console.log(pet.getBunnyInfo());
