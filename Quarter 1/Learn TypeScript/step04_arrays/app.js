"use strict";
// Arrays
let arr = [1, 2, 3, 4, 5];
console.log(typeof arr, arr);
// syntax 2 ( using generic type )
let arr2 = [1, 2, 3, 4, 5];
console.log(typeof arr2, arr2);
// empty array
let arr3 = [];
let arr4 = [];
// 2D empty array
let arr5 = [];
arr5.push([1, 2, 3]);
console.log(arr5);
// 2D array with values
let arr6 = [["John", "Cena"], ["UnderTaker", "WWE"]];
console.log(arr6);
let names = ["John", "Mary", "Cena", "UnderTaker"];
let ages = [30, 24, 40, 50];
// 2D array with different types of values 
// stored the names and ages in a 2D array using spread operator
let arr7 = [[...names], [...ages]];
console.log(typeof arr7, arr7);
