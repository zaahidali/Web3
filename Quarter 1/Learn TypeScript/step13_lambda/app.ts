// lambda function

// lambda function or arrow function
console.log("********** Lambda Function **********");
let sum = (num1: number, num2: number) => num1 + num2;
console.log(sum(10, 20));


// lambda function with optional parameter
console.log("** Lambda Function with Optional Parameter **");
let studentInfo = (name: string, age?: number) => `Name: ${name} Age: ${age}`;
console.log(studentInfo("John", 25));
