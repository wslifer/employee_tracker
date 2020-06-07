const connection = require("./assets/connection");
const inquirer = require("inquirer");
const db = require("./assets/db");

init();

function init() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "Add Employee",
        "Add Department",
        "Add Role",
        "View Employees",
        "View Departments",
        "View Roles",
        "Update employee role",
        "Remove Employee",
        "Exit",
      ],
    })
    .then(({ action }) => {
      switch (action) {
        case "Add Employee":
          break;
        case "Add Department":
          break;
        case "Add Role":
          break;
        case "View Employees":
          break;
        case "View Departments":
          break;
        case "View Roles":
          break;
        case "Update employee role":
          break;
        case "Remove Employee":
          break;
        case "Exit":
          connection.end();
          break;

        default:
          break;
      }
    });
}
