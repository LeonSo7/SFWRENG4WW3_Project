"use strict";

const express = require('express');
const api = express.Router();

var testBusiness = {
    "business1": {
        name: "Test Business Name",
        phone: "647-123-4567"
    }
}
// Get list of businesses and data
api.get('/', function(req, res) {
    var businesses = []
    businesses.push(testBusiness)
    res.status(200).send(businesses);
});

api.get('/:businessName', function(req, res) {
    let businessName = req.params.businessName
    
    // Check if business with provided name exists
    if (businessName in testBusiness) {
        res.status(200).send(testBusiness[businessName])
    } else {
        res.status(404).send("Invalid Business Name")
    }
});

module.exports = api;