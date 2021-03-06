const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  PORT: 3306,
  user: "root",
  password: "password",
  database: "employeeTracker",
});

connection.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
