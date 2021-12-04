"use strict";

const express = require('express');
const api = express.Router();
const db = require('../common/database');

// Get list of reviews
api.get('/', function (req, res) {
    var storeId = req.query.storeId;

    db.getReviews(storeId, function (err, results) {
        if (err) {
            res.send(500, "Server Error");
            return;
        }

        // Format review data
        var formattedReviewData = []

        for (var key of Object.keys(results)) {
            var reviewData = results[key]
            formattedReviewData.push(
                {
                    reviewerId: reviewData.REVIEWID,
                    reviewerName: reviewData.REVIEWERNAME,
                    title: reviewData.TITLE,
                    reviewContent: reviewData.REVIEW,
                    rating: reviewData.RATING,
                    storeId: reviewData.STOREID,
                    userId: reviewData.USERID
                }
            )
        }

        res.status(200).send(JSON.stringify(formattedReviewData));
    });
});

// Add a review to the database
api.post('/', function(req, res) {
    db.addReview(req.body, function (err) {
        if (err) {
            res.status(400).send("Bad request");
            return;
        }
        // Successfully added review
        res.status(200).send("Successfully added user");
    });
});

module.exports = api;