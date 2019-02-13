var mysql = require('mysql2');

var db = {};

db.mysql = mysql;

db.connect = db.mysql.createConnection({
    host: "34.85.83.92",
    user: "farmer",
    password: "1234",
    database: "mamaFarm",
    multipleStatements: true
});

module.exports = db;