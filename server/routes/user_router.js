"use strict";

const express = require('express');
const api = express.Router();
const db = require('../common/database');

// Get list of users
api.get('/', function (req, res) {
    db.getUsers(function (err, results) {
        if (err) {
            res.send(500, "Server Error");
            return;
        }
        // Respond with results as JSON
        res.status(200).send(results);
    });
});

// Add a user to the database
api.post('/', function(req, res) {
    db.addUser(req.body, function (err) {
        if (err) {
            res.status(400).send("Bad request");
            return;
        }
        // Successfully added user
        res.status(200).send("Successfully added user");
    });
});

// Check if user exists with provided username and password
api.post('/auth', function(req, res) {
    db.authUser(req.body, function (err, userData) {
        if (err) {
            res.status(400).send("Bad request");
            return;
        }
        // No user found with credentials
        if (!userData){
            res.status(401).send("Unauthorized");
            return;
        } else {
            // Login successful - return user data to client
            var formattedUserData = JSON.stringify({
                userId: userData.USERID,
                firstName: userData.FIRSTNAME,
                lastName: userData.LASTNAME,
                email: userData.EMAIL,
                phoneNumber: userData.PHONE,
                postalCode: userData.POSTALCODE
            });
            res.status(200).send(formattedUserData);
        }
    });
});

module.exports = api;