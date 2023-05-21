const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "bancodeusuarios",
});

db.connect((error) => {
  if (error) throw error;
});

module.exports = db;
