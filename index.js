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
        console.error(err);
      }
      console.table(res);
      init();
    });
  }

  // Function to add an employee
  function addEmployee() {
    inquirer
      .prompt([
        {
          name: "employeeId",
          type: "input",
          message: "Enter employee ID",
        },
        {
          name: "firstName",
          type: "input",
          message: "Enter employee's first name.",
        },
        {
          name: "lastName",
          type: "input",
          message: "Enter employee's last name.",
        },
        {
          name: "roleId",
          type: "input",
          message: "Enter ID of employee's role.",
        },
      ])
      .then((answers) => {
        connection.query(
          `INSERT INTO employee SET ?`,
          {
            id: answers.employeeId,
            first_name: answers.firstName,
            last_name: answers.lastName,
            role_id: answers.roleId,
          },
          (err) => {
            if (err) throw err;
            console.log(`Employee Added`);
            init();
          }
        );
      });
  }
  // Function to view departments
  function viewDepts() {
    connection.query(`SELECT * FROM department`, (err, res) => {
      if (err) throw err;
      console.table(res);

      init();
    });
  }
  // Function to add a department
  function addDept() {
    inquirer
      .prompt([
        {
          name: "deptName",
          type: "input",
          message: "Enter your department name.",
        },
        {
          name: "deptId",
          type: "input",
          message: "Insert your department ID.",
        },
      ])
      .then((answers) => {
        connection.query(
          `INSERT INTO department SET ?`,
          { id: answers.deptId, name: answers.deptName },
          (err) => {
            if (err) throw err;
            console.log(`Department added.`);
            init();
          }
        );
      });
  }
  // Function to view roles
  function viewRoles() {
    connection.query(`SELECT * FROM role`, (err, res) => {
      if (err) throw err;
      console.table(res);
      init();
    });
  }
  // Function to add a role
  function addRole() {
    inquirer
      .prompt([
        {
          name: "roleID",
          type: "input",
          message: "Enter role ID",
        },
        {
          name: "roleTitle",
          type: "input",
          message: "Enter role title.",
        },
        {
          name: "salary",
          type: "input",
          message: "Enter salary for role.",
        },
        {
          name: "departmentID",
          type: "input",
          message: "Enter ID of department role belongs to.",
        },
      ])
      .then((answers) => {
        connection.query(
          `INSERT INTO role SET ?`,
          {
            id: answers.roleID,
            title: answers.roleTitle,
            salary: answers.salary,
            department_id: answers.departmentID,
          },
          (err) => {
            if (err) throw err;
            console.log(`Role added.`);
            init();
          }
        );
      });
  }
  // Function to update employee role

  // Function to remove employee
}
