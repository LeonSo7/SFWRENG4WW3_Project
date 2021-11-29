"use strict"

const mysql = require('mysql');
require('dotenv').config();

var pool = mysql.createPool({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    port: process.env.PORT,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    connectionLimit: 20
});


// Connects to the database and executes a SQL query
function _connectAndQuery (sqlStatement, callback) {
    // Get connection from the pool
    pool.getConnection(function (err, connection) {
        if (err) {
            console.log(err);
            callback(true);
            return;
        }
        // Execute query
        connection.query(sqlStatement, function (err, results) {
            connection.release();
            if (err) { console.log(err); callback(true); return; }
            callback(false, results);
        });
    });
}

// GET businesses from database
exports.getBusinesses = function (callback) {
    var sql = "SELECT * FROM STORES";
    _connectAndQuery(sql, function (err, cb) {
        if (err) { 
            console.log(err); 
            callback(true); 
            return; 
        }
        callback(false, cb);
    });
};

// GET users from database
exports.getUsers = function (callback) {
    var sql = "SELECT * FROM USERS";
    _connectAndQuery(sql, function (err, cb) {
        if (err) { 
            console.log(err); 
            callback(true); 
            return; 
        }
        callback(false, cb);
    });
};

// GET reviews from database
exports.getReviews = function (callback) {
    var sql = "SELECT * FROM REVIEWS";
    _connectAndQuery(sql, function (err, cb) {
        if (err) { 
            console.log(err); 
            callback(true); 
            return; 
        }
        callback(false, cb);
    });
};





