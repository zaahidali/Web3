import inquirer from "inquirer";

// ####### ATM #######
// Add balance
// View Balance
// Withdraw Balance
// Send Money
// Exit
const atm = {
  users: [
    {
      id: 1,
      name: "John",
      pin: 1234,
      balance: 1000,
    },
    {
      id: 2,
      name: "Jane",
      pin: 5678,
      balance: 2000,
    },
    {
      id: 3,
      name: "Jack",
      pin: 9012,
      balance: 3000,
    },
  ],
};

console.log("########## ATM ##########");
inquirer
  .prompt([
    {
      type: "number",
      name: "name",
      message: ["User ID:"],
    },
  ])
  .then((answers) => {
    atm.users.forEach((user) => {
      if (user.id === answers.name) {
        inquirer
          .prompt([
            {
              type: "password",
              name: "pin",
              message: ["PIN:"],
              mask: "*"
            },
          ])
          .then((answers) => {
            if (user.pin == answers.pin) {
              console.log("Logged in Successfully");
              setTimeout(() => {
                console.clear();              
                inquirer
                  .prompt([
                    {
                      type: "list",
                      name: "action",
                      message: ["Select Action:"],
                      choices: ["Add Balance", "View Balance", "Withdraw Balance", "Send Money","Exit"],
                    },
                  ])
                  .then((answers) => {
                    if (answers.action === "Add Balance") {
                      console.log('Your current balance is: ', user.balance);
                      inquirer
                        .prompt([
                          {
                            type: "number",
                            name: "amount",
                            message: ["Enter Amount:"],
                          },
                        ])
                        .then((answers) => {
                          user.balance += answers.amount;
                          console.log("Balance submitted successfully");
                          console.log('Your updated balance is: ', user.balance);
                        });
                    }
                    if (answers.action === "View Balance") {
                      console.log("Balance: " + user.balance);
                    }
                    if (answers.action === "Withdraw Balance") {
                      console.log('Your current balance is: ', user.balance);
                      inquirer
                        .prompt([
                          {
                            type: "number",
                            name: "amount",
                            message: ["Enter Amount:"],
                          },
                        ])
                        .then((answers) => {
                          if (user.balance > answers.amount) {
                            user.balance -= answers.amount;
                            console.log("Balance withdrawn successfully");
                            console.log('Your remaining balance is: ', user.balance);
                          } else {
                            console.log("Insufficient Balance");
                          }
                        });
                    }
                    if (answers.action === "Send Money") {
                      console.log('Your current balance is: ', user.balance);
                      inquirer
                        .prompt([
                          {
                            type: "number",
                            name: "amount",
                            message: ["Enter Amount:"],
                          },
                          {
                            type: "number",
                            name: "id",
                            message: ["Enter User ID:"],
                          },
                        ])
                        .then((answers) => {
                          if (user.balance > answers.amount) {
                            user.balance -= answers.amount;
                            atm.users.forEach((user) => {
                              if (user.id === answers.id) {
                                user.balance += answers.amount;
                                console.log("Money sent successfully");
                              }
                            });
                          } else {
                            console.log("Insufficient Balance");
                          }
                        });
                    }
                    
                    if (answers.action === "Exit") {
                      console.log("Thank you for using ATM");
                    }
                  });
              }, 2000);
            }
          });
      }
    }
    
    );
  });
