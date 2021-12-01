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
function _connectAndQuery(sqlStatement, callback) {
    // Get connection from the pool
    pool.getConnection(function (err, connection) {
        if (err) {
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

// Get table length for IDs
// Use length as ID -- assume entries cannot be deleted for this project!
function _getTableSize(tableName, callback) {
    var sql = "SELECT COUNT(*) FROM " + tableName;
    _connectAndQuery(sql, function (err, size) {
        if (err) {
            console.log(err);
            callback(true);
            return;
        }
        size = JSON.parse(JSON.stringify(size))[0]['COUNT(*)'];
        callback(false, size);
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

// Get users from database
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

// Get reviews from database
exports.getReviews = function (callback) {
    var sql = "SELECT * FROM REVIEWS";
    _connectAndQuery(sql, function (err, cb) {
        if (err) {
            callback(true);
            return;
        }
        callback(false, cb);
    });
};

// Add user to database
exports.addUser = function (userData, callback) {
    // Process user data and format into SQL statement
    if (!userData) {
        callback(false);
    }

    _getTableSize("USERS", function (err, size) {
        var sql = `INSERT INTO USERS VALUES(${size}, "${userData.firstName}", "${userData.lastName}", ` +
            `"${userData.phoneNumber}", "${userData.email}", "${userData.password}", "${userData.postalCode}")`;
        _connectAndQuery(sql, function (err, cb) {
            if (err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false);
        });
    });
};

// Check if user exists with provided username and password
exports.authUser = function (loginData, callback) {
    // Process login data and format into SQL statement
    if (!loginData) {
        callback(false);
    }

    var sql = `SELECT USERID, FIRSTNAME, LASTNAME, PHONE, EMAIL, POSTALCODE FROM USERS WHERE ` +
        `EMAIL = "${loginData.email}" AND PASS = "${loginData.password}"`;
    _connectAndQuery(sql, function (err, userData) {
        if (err) {
            console.log(err);
            callback(true);
            return;
        }
        userData = JSON.parse(JSON.stringify(userData));

        // Return data of last user registered with email and password
        callback(false, userData[Object.keys(userData).length - 1]);

    });
};

// Get business data querying by id
exports.getBusinessById = function(businessId, callback) {
    if (!businessId) {
        callback(false);
    }

    var sql = `SELECT * FROM STORES WHERE ` +
        `STOREID = ${businessId}`;
    _connectAndQuery(sql, function (err, businessData) {
        if (err) {
            console.log(err);
            callback(true);
            return;
        }
        businessData = JSON.parse(JSON.stringify(businessData));

        // Return data of business
        callback(false, businessData[0]);

    });
}





