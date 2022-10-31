"use strict";
// enum type
// example 1
var DoorState;
(function (DoorState) {
    DoorState[DoorState["Open"] = 0] = "Open";
    DoorState[DoorState["Close"] = 1] = "Close";
})(DoorState || (DoorState = {}));
function checkDoorState(state) {
    if (state === DoorState.Open) {
        console.log("Door is open");
    }
    else if (state === DoorState.Close) {
        console.log("Door is close");
    }
}
checkDoorState(DoorState.Open);
// example 2
var SignalLight;
(function (SignalLight) {
    SignalLight[SignalLight["Red"] = 0] = "Red";
    SignalLight[SignalLight["Yellow"] = 1] = "Yellow";
    SignalLight[SignalLight["Green"] = 2] = "Green";
})(SignalLight || (SignalLight = {}));
let signal;
signal = SignalLight.Green;
console.log(signal); // 2 as it is the index of Green
var SignalLight2;
(function (SignalLight2) {
    SignalLight2[SignalLight2["Red"] = 1] = "Red";
    SignalLight2[SignalLight2["Yellow"] = 2] = "Yellow";
    SignalLight2[SignalLight2["Green"] = 3] = "Green";
})(SignalLight2 || (SignalLight2 = {}));
let variable = SignalLight2[1];
console.log(variable); // Yellow as the first value starts from 1 and remaining values are incremented by 1
var SignalLight3;
(function (SignalLight3) {
    SignalLight3[SignalLight3["Red"] = 1] = "Red";
    SignalLight3[SignalLight3["Green"] = 4] = "Green";
    SignalLight3[SignalLight3["Yellow"] = 2] = "Yellow";
})(SignalLight3 || (SignalLight3 = {}));
let variable2 = SignalLight3["Yellow"];
console.log(variable2);
console.log(SignalLight3);
