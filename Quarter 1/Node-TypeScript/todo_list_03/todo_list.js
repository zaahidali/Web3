import inquirer from "inquirer";
// todo list
// add item
// remove item
// view items
// quit

console.log("########## TODO LIST ##########");
let todoList = ['item1', 'item2', 'item3', 'item4', 'item5'];

inquirer
  .prompt([
    {
      type: "list",
      name: "todo",
      message: "What do you want to do?",
      choices: ["Add", "Remove", "View", "Exit"],
    },
  ])
  .then((answers) => {
    setTimeout(() => {
      if (answers.todo === "Add") {
        console.clear();
        addItem();
      }
      else if (answers.todo === "Remove") {
        console.log('todoList', todoList.toString());
        removeItem();
      }
      else if (answers.todo === "View") {
        console.clear();
        viewItems();
      }
      else if (answers.todo === "Exit") {
        console.clear();
        console.log("########## EXITING ##########");
        process.exit();
      }

    }, 0);
  });

function addItem() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "todo",
        message: "What do you want to add?",
      },
    ])
    .then((answers) => {
      todoList.push(answers.todo);
      console.log("Added: " + answers.todo);
      console.log("########## TODO LIST ##########");
      console.log(todoList.toString());
    });
}

function removeItem() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "todo",
        message: "What do you want to remove?",
      },
    ])
    .then((answers) => {
      console.log('todoList', todoList.toString());
      todoList.forEach((item, index) => {
        if (item === answers.todo) {
          todoList.splice(index, 1);
        }
      });
      console.log("Removed: " + answers.todo);
      console.log('todoList', todoList.toString());
    }) 
}

function viewItems() {
  console.log("########## TODO LIST ##########");
  console.log(todoList.join(' '));
}