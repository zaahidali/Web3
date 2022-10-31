// enum type

// example 1
enum DoorState {
  Open,
  Close,
}

function checkDoorState(state: DoorState) {
  if (state === DoorState.Open) {
    console.log("Door is open");
  } else if (state === DoorState.Close) {
    console.log("Door is close");
  }
}
checkDoorState(DoorState.Open);

// example 2
enum SignalLight {
  Red,
  Yellow,
  Green,
}
let signal: SignalLight;
signal = SignalLight.Green;
console.log(signal); // 2 as it is the index of Green

enum SignalLight2 {
  Red = 1,
  Yellow,
  Green,
}
let variable: string = SignalLight2[1];
console.log(variable); // Yellow as the first value starts from 1 and remaining values are incremented by 1

enum SignalLight3 {
  Red = 1,
  Green = 4,
  Yellow = 2,
}
let variable2 = SignalLight3["Yellow"];
console.log(variable2);
console.log(SignalLight3);