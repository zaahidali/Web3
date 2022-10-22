import inquirer from 'inquirer';

  inquirer
  .prompt([
    {
      type: 'list',
      name: 'Calculator',
      message: 'Pick the operation you want to perform',
      choices: [
                'Addition(+)', 
                'Subtraction(-)', 
                'Multiplication(*)', 
                'Division(/)',
                'Exit']
    },
  ])
  .then(answers => {
    if (answers.Calculator === 'Exit') {
      console.log('Good Bye');
    }
    else {
      enterNumber(answers.Calculator);
    }
  });


function enterNumber(operator) {
  inquirer
    .prompt([
      {
        type: 'number',
        name: 'firstNumber',
        message: 'Enter first number: ',
      },
      {
        type: 'number',
        name: 'secondNumber',
        message: 'Enter second number: ',
      },
    ])
    .then(answers => {
      let firstNumber = parseInt(answers.firstNumber);
      let secondNumber = parseInt(answers.secondNumber);
      let result = 0;
      if (operator === 'Addition(+)') {
        result = addition(firstNumber, secondNumber);
      } else if (operator === 'Subtraction(-)') {
        result = subtraction(firstNumber, secondNumber);
      } else if (operator === 'Multiplication(*)') {
        result = multiplication(firstNumber, secondNumber);
      } else if (operator === 'Division(/)') {
        result = division(firstNumber, secondNumber);
      } else {
        console.log('Exit');
      }
      console.log('Result: ' + result);
    });
}

function addition(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
function subtraction(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
}
function multiplication(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}
function division(firstNumber, secondNumber) {
  return firstNumber / secondNumber;
}
