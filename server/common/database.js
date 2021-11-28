const mysql = require('mysql2');

var pool = mysql.createPool({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    port: process.env.PORT,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    connectionLimit: 10
});

pool.getConnection((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL connected...')
})

// exports.getReviews = function(callback) {
//     var sql = "SELECT * FROM reviews";
//     db.query(sql, function(err, results) {
//         // if 
//     })
// };



