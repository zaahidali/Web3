// function optional parameter

// named function with optional parameter
function studentInformation(firstName: string, lastName: string, age?: number) {
  return `First Name: ${firstName} Last Name: ${lastName} Age: ${age}`;
}
console.log(studentInformation("John", "Doe", 25));

// anonymous function with optional parameter

let studentInfo = function (firstName: string, lastName: string, age?: number) {
  return `First Name: ${firstName} Last Name: ${lastName} Age: ${age}`;
};
console.log(studentInfo("John", "Doe", 25));

// arrow or lambda function with optional parameter

let studentInfo2 = (firstName: string, lastName: string, age?: number) =>
  `First Name: ${firstName} Last Name: ${lastName} Age: ${age}`;

console.log(studentInfo2("John", "Doe", 25));
