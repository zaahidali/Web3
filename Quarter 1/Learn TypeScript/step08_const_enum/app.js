"use strict";
const greenSignal = 2 /* SignalLight.Green */;
console.log(greenSignal); // 2 as it is the index of Green
// const signalColor: string  = SignalLight2[1];
// console.log(signalColor); // will give error as number is not allowed in const enum
// A const enum can be accessed using a string literal, but not a variable. 
let colorRed = SignalLight2['2'];
// or
let colorRed2 = 2 /* SignalLight2['Yellow'] */;
console.log(colorRed); // 2 as it is the index of Yellow
