var mysql = require('mysql2');
var config = require('../config/db_config');

function createPool() {
    var pool = mysql.createPool({
        host: config.host,
        user: config.user,
        password: config.password,
        database: config.database,
        multipleStatements: true
    });

    return pool;
}

module.exports.Pool = createPool;