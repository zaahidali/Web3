"use strict";
// function overloading
// A function can have multiple signatures with different parameters and return types.
// 1. Named function with multiple signatures and return type
console.log("\n********** Named Function with Multiple Signatures and same Return Type **********");
function studentInfo(firstName, lastName, age) {
    if (lastName && age) {
        return `First Name: ${firstName} Last Name: ${lastName} Age: ${age}`;
    }
    else if (lastName) {
        return `First Name: ${firstName} Last Name: ${lastName}`;
    }
    else if (firstName) {
        return `First Name: ${firstName}`;
    }
    else {
        return "No Data";
    }
}
console.log(studentInfo("Ali", "Zahid", 22));
console.log(studentInfo("Ali", "Zahid"));
console.log(studentInfo("Ali"));
// Named function with multiple signatures and different return types
console.log("********** Function with Multiple Signatures and Return Type **********");
function add(val1, val2) {
    return val1 + val2;
}
console.log(add("Ali", "Zahid"));
console.log(add(10, 20));
