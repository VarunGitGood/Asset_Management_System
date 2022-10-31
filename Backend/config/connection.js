const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "assetmanagementsystem",
  multipleStatements: true
});

module.exports = connection;
