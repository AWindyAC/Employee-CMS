const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "fowlkes.wendell",
  password: "Skyr!mw!ndy508",
  database: "employees"
});

connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;