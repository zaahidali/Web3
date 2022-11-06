"use strict";
// type
// it is a way to give a name to a type
// It is exactly the same as an interface, but it is used for primitive types
let fullNames = ["John", "Jane", "Bob", 1, 2, 3];
console.log("fullNames: ", fullNames);
console.log("typeof fullNames: ", typeof fullNames);
function usingCallBackType(cb) {
    cb("Hello");
}
function usingCallBackType2(cb) {
    cb();
}
usingCallBackType((arg0) => {
    console.log("arg0: ", arg0);
});
usingCallBackType2(() => {
    console.log("Hello");
});
