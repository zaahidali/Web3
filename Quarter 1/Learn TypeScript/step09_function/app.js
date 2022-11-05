"use strict";
// function
// 1. Named function
console.log("********** Named Function **********");
function studentInfo(firstName, lastName, age) {
    return `First Name: ${firstName} Last Name: ${lastName} Age: ${age}`;
}
console.log(studentInfo("John", "Doe", 25));
// 2. Anonymous function
console.log("********** Anonymous Function **********");
let studentInfo2 = function (firstName, lastName, age) {
    return `First Name: ${firstName} Last Name: ${lastName} Age: ${age}`;
};
console.log(studentInfo2("John", "Doe", 25));
// 3. Arrow/Lambda function
console.log("********** Arrow Function **********");
let studentInfo3 = (firstName, lastName, age) => `First Name: ${firstName} Last Name: ${lastName} Age: ${age}`;
console.log(studentInfo3("John", "Doe", 25));
// 4. Class method/function
console.log("********** Class Method **********");
class Student {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    studentInfo() {
        // class method or function doesn't need to specify return type and function name
        return `First Name: ${this.firstName} Last Name: ${this.lastName} Age: ${this.age}`;
    }
}
let student = new Student("John", "Doe", 25);
console.log(student.studentInfo());
// 5. Function with optional parameter
console.log("********** Function with Optional Parameter **********");
function info(age, firstName, lastName) {
    return `My Name is ${firstName} ${lastName} and I am ${age} years young.`;
}
console.log(info(23, "Zahid"));
// 6. Function with default parameter
console.log("********** Function with Default Parameter **********");
function info2(age, firstName, lastName = "Doe") {
    return `My Name is ${firstName} ${lastName} and I am ${age} years young.`;
}
console.log(info2(25, "Ali"));
// 7. Function with rest parameter
console.log("********** Function with Rest Parameter **********");
function studentList(section = "A", ...name) {
    console.log(`Section: ${section}`);
    for (let i = 0; i < name.length; i++) {
        console.log(`Name: ${name[i]}`);
    }
}
let names = ["John", "Jane", "Alex", "Zahid"];
studentList("A", ...names);
// 8. Function with explicit return type
console.log("\n********** Function with Explicit Return Type **********");
function info3(firstName, lastName, age) {
    return `First Name: ${firstName} Last Name: ${lastName} Age: ${age}`;
}
console.log(studentInfo3("Ali", "Doe", 25));
