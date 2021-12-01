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
        var formattedBusinessData = []

        for (var key of Object.keys(results)) {
            var businessData = results[key]
            formattedBusinessData.push(
                {
                    storeId: businessData.STOREID,
                    storeName: businessData.STORENAME,
                    description: businessData.DESCR,
                    latitude: businessData.LATITUDE,
                    longitude: businessData.LONGITUDE
                }
            )
        }

        res.status(200).send(JSON.stringify(formattedBusinessData));
    });
});

api.get('/:businessId', function (req, res) {
    let businessId = req.params.businessId

    db.getBusinessById(businessId, function (err, businessData) {
        if (err || !businessId) {
            res.status(400).send("Bad request");
            return;
        }
        // No user found with credentials
        if (!businessData) {
            res.status(404).send("Not found");
            return;
        } else {
            // Business found -- return business data
            var formattedBusinessData = JSON.stringify({
                storeId: businessData.STOREID,
                storeName: businessData.STORENAME,
                description: businessData.DESCR,
                latitude: businessData.LATITUDE,
                longitude: businessData.LONGITUDE
            });
            res.status(200).send(formattedBusinessData);
        }
    });
});

module.exports = api;