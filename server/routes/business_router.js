"use strict";

const express = require('express');
const api = express.Router();
const db = require('../common/database');


// Get list of businesses and data
api.get('/', function (req, res) {
    db.getBusinesses(function (err, results) {
        if (err) {
            console.log(err);
            res.status(500).send("Server Error");
            return;
        }
        console.log(results)
        // Respond with results as JSON
        res.status(200).send(results);
    });
});

api.get('/:businessName', function (req, res) {
    let businessName = req.params.businessName

    // Check if business with provided name exists
    if (businessName in testBusiness) {
        res.status(200).send(testBusiness[businessName])
    } else {
        res.status(404).send("Invalid Business Name")
    }
});

module.exports = api;