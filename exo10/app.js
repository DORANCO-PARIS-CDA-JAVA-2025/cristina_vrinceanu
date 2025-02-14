const express = require("express");
const mysql = require("mysql");
const app = express();
const port = 5000;

const connection = mysql.createConnection({
  host: "db",
  user: "user",
  password: "password",
  database: "mydatabase",
});

connection.connect();

app.get("/", (req, res) => {
  connection.query("SELECT 1 + 1 AS solution", (error, results) => {
    if (error) throw error;
    res.send(`1 + 1 = ${results[0].solution}`);
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
