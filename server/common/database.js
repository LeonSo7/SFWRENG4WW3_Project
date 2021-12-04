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

/* PRIVATE METHODS */
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

/* BUSINESS/STORE QUERIES */
// GET businesses from database
exports.getBusinesses = function (latitude, longitude, rating, searchStr, callback) {
    // Construct SQL query based on search parameters
    /* SELECT portion of sql query */
    var sql = "SELECT S.*"; // Default sql to select all businesses

    // Modify sql query if latitude and longitude exists; narrow search using distance
    if (latitude & longitude) {
        sql += `, (3959 * acos(cos(radians(${latitude})) * cos(radians(LATITUDE)) * ` +
            `cos(radians(LONGITUDE) - radians(${longitude})) + sin(radians(${latitude})) * sin(radians(LATITUDE)))) AS DISTANCE`
    }

    // Calculate average rating of each store
    sql += `, COALESCE(AVG(RATING), 5) AS AVGRATING`

    // End select portion of sql query
    sql += ` FROM STORES S`

    /* JOIN portion of sql query */
    // Join with reviews table to calculate average rating
    sql += ` LEFT JOIN REVIEWS R ON S.STOREID = R.STOREID`

    /* WHERE portion of sql query */
    // Modify sql query to include search string
    // Search will look for entries with STORENAME containing search string
    if (searchStr && searchStr != "") {
        sql += ` WHERE STORENAME LIKE "%${searchStr}%"`
    }

    /* GROUPBY portion of sql query */

    sql += ` GROUP BY S.STOREID`

    /* HAVING portion of sql query */
    if (rating && (latitude & longitude)) {
        sql += ` HAVING AVGRATING >= ${rating} AND DISTANCE < 30`
    } else if (rating) {
        sql += ` HAVING AVGRATING >= ${rating}`
    } else if (latitude & longitude) {
        sql += ` HAVING DISTANCE < 30`
    }

    /* ORDER BY and LIMIT  portion of sql query (for longitude and latitude) */
    // Modify sql query if latitude and longitude exists; narrow and order search results using distance (return 0-20 nearby stores only)
    if (latitude & longitude) {
        sql += ` ORDER BY DISTANCE LIMIT 0, 20`
    }

    _connectAndQuery(sql, function (err, cb) {
        if (err) {
            console.log(err);
            callback(true);
            return;
        }
        callback(false, cb);
    });
};

// Get business data querying by id
exports.getBusinessById = function (businessId, callback) {
    if (!businessId) {
        callback(false);
    }

    var sql = `SELECT S.*, COALESCE(AVG(RATING), 5) AS AVGRATING FROM STORES S` + 
        ` LEFT JOIN REVIEWS R ON S.STOREID = R.STOREID` +
        ` WHERE S.STOREID = ${businessId}`;


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

/* USERS QUERIES */
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

// Add user to database
exports.addUser = function (userData, callback) {
    // Process user data and format into SQL statement
    if (!userData) {
        callback(false);
    }

    _getTableSize("USERS", function (err, size) { // Use size as id (assume no entries can be deleted)
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

/* REVIEWS QUERIES */
// GET reviews from database
exports.getReviews = function (storeId, callback) {
    var sql = `SELECT * FROM REVIEWS`;

    // If storeId url param is provided, filter reviews by storeId
    if (storeId) {
        sql += ` WHERE STOREID = ${storeId}`;
    }

    _connectAndQuery(sql, function (err, cb) {
        if (err) {
            callback(true);
            return;
        }
        callback(false, cb);
    });
};

// Add review to database
exports.addReview = function (reviewData, callback) {
    // Process user data and format into SQL statement
    if (!reviewData) {
        callback(false);
    }

    _getTableSize("REVIEWS", function (err, size) { // Use size as id (assume no entries can be deleted)
        var sql = `INSERT INTO REVIEWS VALUES(${size}, "${reviewData.name}", "${reviewData.title}",` +
            ` "${reviewData.review}", ${reviewData.rating}, ${reviewData.storeId}, ${reviewData.userId})`;

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





