// contant enums
const enum SignalLight {
  Red,
  Yellow,
  Green,
}

const greenSignal: SignalLight = SignalLight.Green;
console.log(greenSignal); // 2 as it is the index of Green


const enum SignalLight2 {
  Red = 1,
  Green = 4,
  Yellow = 2,
}
// const signalColor: string  = SignalLight2[1];
// console.log(signalColor); // will give error as number is not allowed in const enum

// A const enum can be accessed using a string literal, but not a variable. 
let colorRed = SignalLight2['2'];
// or
let colorRed2 = SignalLight2['Yellow'];
console.log(colorRed); // 2 as it is the index of Yellow