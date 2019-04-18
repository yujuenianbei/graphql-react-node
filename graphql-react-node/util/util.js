var mysql = require('mysql');
var $conf = require('../conf/db');
var pool = mysql.createPool($conf.mysql);

// 初始化数据库表
const sql = fs.readFileSync('./conf/graphql.sql').toString();
pool.query(sql, (err, result) => {
    if (err) throw err;
});

async function searchSql($sql, params) {
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) {
            connection.query($sql, params, function (err, result) {
                connection.release();
                if (err) {
                    reject(err)
                }
                if (result.insertId) result.id = result.insertId;
                resolve(result);
            });
        });
    })
}

module.exports = {
    searchSql: searchSql
}
