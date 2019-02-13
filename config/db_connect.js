var mysql = require('mysql2');
var config = require('../config/db_config');

// module.exports = function () {
//     var config = require('../config/db_config');
//     var pool = mysql.createPool({
//         host: config.host,
//         user: config.user,
//         password: config.password,
//         database: config.database,
//         multipleStatements: true
//     });
//
//     return {
//         getConnection: function (callback) {    // connection pool을 생성하여 리턴합니다
//             pool.getConnection(callback);
//         },
//         end: function(callback){
//             pool.end(callback);
//         }
//     }
// }();
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