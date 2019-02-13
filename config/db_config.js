// module.exports = (function() {
//     return {
//         host: "34.85.83.92",
//         user: "farmer",
//         password: "1234",
//         database: "mamaFarm"
//     }
// })();
var mysql = require('mysql2');

function createConnection() {
    var connection = mysql.createConnection({
        host: "34.85.83.92",
        user: "farmer",
        password: "1234",
        database: "mamaFarm",
        multipleStatements: true
    });

    return connection;
}

module.exports.createConnecion = createConnection;