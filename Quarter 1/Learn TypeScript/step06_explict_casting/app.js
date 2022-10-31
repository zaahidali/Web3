"use strict";
// Explicit Casting
let anyType = { name: 'John', age: 25 };
anyType = { age: 28, name: 'Jane' }; // can be reassigned as it has same properties
anyType = { age: 20, id: 123, name: 'Alex' }; // can add new properties
anyType = { age: 40 }; // can remove properties
// syntax 2
let anyType2 = { name: 'Aj' };
anyType2 = { age: 28, name: 'Jane' }; // can be reassigned as it has same properties
anyType2 = { age: 20, id: 123, name: 'Alex' }; // can add new properties
anyType2 = { age: 40 }; // can remove properties
let strTest = 'test';
let b = 90;
// strTest = b; // error
// console.log(strTest);
