import inquirer from "inquirer";
import { randomInt } from "crypto";

const MAX_NUMBER = 50;
const MIN_NUMBER = 1;
const getRandomNumber = () => randomInt(MIN_NUMBER, MAX_NUMBER);

inquirer
  .prompt([
    {
      type: "input",
      name: "number",
      message: "Guess a number between 1 and 50",
      validate: (input) => {
        const number = parseInt(input);
        if (isNaN(number)) {
          return "Please enter a number";
        }
        if (number < MIN_NUMBER || number > MAX_NUMBER) {
          return `Please enter a number between ${MIN_NUMBER} and ${MAX_NUMBER}`;
        }
        return true;
      },
    },
  ])
  .then((answers) => {
    const randomNumber = getRandomNumber();
    const guessedNumber = parseInt(answers.number);
    console.log("The random number is", randomNumber);

    if (guessedNumber === randomNumber) {
      console.log("You guessed the number!");
      return;
    } else {
      console.log("You did not guess the right number");
    }

  });