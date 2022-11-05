"use strict";
// callbacks function
// A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed.
console.log("********** Callbacks Function **********");
function getName(name) {
    return `My name is: ${name}`;
}
function recieveName(name, callback) {
    return callback(name);
}
console.log(recieveName("Ali", getName));
// calculate sum using callbacks function
function add(num1, num2) {
    return num1 + num2;
}
function calculate(num1, num2, findSum) {
    if (findSum(num1, num2) > 10) {
        return findSum(num1, num2);
    }
    return 0;
}
console.log(calculate(5, 6, add));
// calculate marks using callbacks function
function calculateResult(marks, callback) {
    return callback(marks);
}
function getMarks(marks) {
    if (marks > 50) {
        return "Pass";
    }
    return "Fail";
}
console.log(calculateResult(60, getMarks));
console.log(typeof getMarks);
