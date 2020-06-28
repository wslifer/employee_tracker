const connection = require("./assets/connection");
const inquirer = require("inquirer");


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
          addEmployee();
          break;
        case "Add Department":
          addDept();
          break;
        case "Add Role":
          addRole();
          break;
        case "View Employees":
          viewEmpls();
          break;
        case "View Departments":
          viewDepts();
          break;
        case "View Roles":
          viewRoles();
          break;
        case "Update employee role":
          updateEmpl();
          break;
        case "Remove Employee":
          removeEmpl();
          break;
        case "Exit":
          connection.end();
          break;

        default:
          break;
      }
    });

// Function for viewing employees 
function viewEmpls() {
  connection.query(`SELECT * FROM employee`, (err, res) => {
    if (err) {
      console.error(err)
    }
    console.table(res);
    init();
  })
}

// Function to add an employee
function addEmployee() {};
}
