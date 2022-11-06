// type
// it is a way to give a name to a type
// It is exactly the same as an interface, but it is used for primitive types

type alphaNumeric = string | number;
type alphaNumericArray = Array<alphaNumeric>;

let fullNames: alphaNumericArray = ["John", "Jane", "Bob", 1, 2, 3];

console.log("fullNames: ", fullNames);
console.log("typeof fullNames: ", typeof fullNames);

type callBackType = (args0: string) => void;
type callBackType2 = () => void;

function usingCallBackType(cb: callBackType) {
  cb("Hello");
}

function usingCallBackType2(cb: callBackType2) {
  cb();
}

usingCallBackType((arg0: string) => {
  console.log("arg0: ", arg0);
});

usingCallBackType2(() => {
  console.log("Hello");
});
