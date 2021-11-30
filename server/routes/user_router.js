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
        // Successfully added
        res.status(200).send("Successfully added user");
    });
});

module.exports = api;