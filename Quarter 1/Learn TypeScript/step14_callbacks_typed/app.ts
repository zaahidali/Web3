// callbacks function
// A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed.

console.log("********** Callbacks Function **********");
function getName(name: string): string {
  return `My name is: ${name}`;
}

function recieveName(name: string, callback: (name: string) => string) {
  return callback(name);
}

console.log(recieveName("Ali", getName));

// calculate sum using callbacks function

function add(num1: number, num2: number): number {
  return num1 + num2;
}

function calculate(
  num1: number,
  num2: number,
  findSum: (num1: number, num2: number) => number
): number {
  if (findSum(num1, num2) > 10) {
    return findSum(num1, num2);
  }
  return 0;
}

console.log(calculate(5, 6, add));

// calculate marks using callbacks function

function calculateResult(marks: number, callback: (marks: number) => string) {
  return callback(marks);
}

function getMarks(marks: number) {
  if (marks > 50) {
    return "Pass";
  }
  return "Fail";
}

console.log(calculateResult(60, getMarks));