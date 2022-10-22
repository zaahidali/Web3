import inquirer from "inquirer";

const questions = [
  {
    type: "input",
    name: "amount",
    message: "How much PKR money do you have?",
  },
  {
    type: "list",
    name: "currency",
    message: "What currency do you want to convert it?",
    choices: ["USD", "EUR", "GBP", "JPY", "AUD", "CAD"],
  },
];
inquirer.prompt(questions).then((answers) => {
  if (answers.amount && answers.currency) {
    const amount = parseInt(answers.amount);
    const currency = answers.currency;
    const convertedAmount = convertCurrency(amount, currency);
    console.log(
      `You have ${convertedAmount} ${currency} if you have ${amount} PKR.`
    );
  }
});

function convertCurrency(amount, currency) {
  switch (currency) {
    case "USD":
      return amount / 160;
    case "EUR":
      return amount / 190;
    case "GBP":
      return amount / 220;
    case "JPY":
      return amount / 1.5;
    case "AUD":
      return amount / 120;
    case "CAD":
      return amount / 130;
  }
}