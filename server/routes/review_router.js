"use strict";

const express = require('express');
const api = express.Router();
const db = require('../common/database');

// Get list of reviews
api.get('/', function (req, res) {
    db.getReviews(function (err, results) {
        if (err) {
            res.send(500, "Server Error");
            return;
        }
        // Respond with results as JSON
        res.status(200).send(results);
    });
});

module.exports = api;