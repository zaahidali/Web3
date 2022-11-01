// default parameter

// named function with default parameter

function calculateSum(num1: number, num2: number = 30) {
  return num1 + num2;
}

console.log(calculateSum(10));

// anonymous function with default parameter

let calculateSum2 = function (num1: number, num2: number = 40) {
  return num1 + num2;
};

console.log(calculateSum2(10));

// arrow or lambda function with default parameter

let calculateSum3 = (num1: number, num2: number = 50) => num1 + num2;

console.log(calculateSum3(10));
