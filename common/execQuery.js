var pool = require('../config/db_connect');

module.exports = function() {
    return {
        execQuery: function(query, params,callback) {
            pool.getConnection(function(err, con) {
               con.query(query, params,function(err, rows, fields) {
                   console.log("!! Executed SQL : " + this.sql);
                   con.release();
                   if (err) return callback(err);
                   return callback(null, rows);
               });
            });
        },
        pool: pool
    }
}

async function execQuery(query, params) {
    var createdPool = pool.Pool();
    var result = await createdPool.getConnection(function(err, con) {
        con.query(query, params,function(err, rows, fields) {
            console.log("!! Executed SQL : " + this.sql);
            con.release();
            if (err) return callback(err);
            return callback(null, rows);
        });
    });

    return result;
}

//
// function execQuery(query, params) {
//
//     pool.getConnection(function(err, con) {
//        con.query(query, params,function(err, rows, fields) {
//            console.log("!! Executed SQL : " + this.sql);
//            con.release();
//            if (err) return afterExecQuery(err);
//            afterExecQuery(null, rows);callback
//        });
//     });
// }
//
// function afterExecQuery(err, data){
//     var ret = null;
//
//     if (err) console.log(err);
//     else {
//         console.log(data[1]);
//         ret = data[1];
//         console.log("Ret : " + JSON.stringify(ret));
//         return ret;
//     }
//
//     this.pool.end(function(err){
//         if (err) console.log(err);
//         else {
//             console.log('Connection pool has closed');
//             console.log('finished');
//         }
//     });
// }
