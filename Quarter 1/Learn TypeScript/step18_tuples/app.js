"use strict";
// tuples
// it is an array with a fixed number of elements
// each element can have a different type
// it is used when you know the number of elements and the type of each element
// it is used when you want to return multiple values from a function
// it is used when you want to pass multiple values to a function
// it uses the syntax [type, type, type] = [value, value, value]
// it can be used with destructuring syntax
// it can be used with spread syntax
// e.g. [a, b, c] = [1, 2, 3]
let tuple = ["Ali", 1];
console.log("tuple: ", tuple);
let [myName, id] = tuple;
console.log("myName: ", myName);
console.log("id: ", id);
let namesList;
namesList = ["John", "Jane", "Bob"];
function displayNames(...namesList) {
    for (let name of namesList) {
        console.log("name: ", name);
    }
}
displayNames(...namesList);
