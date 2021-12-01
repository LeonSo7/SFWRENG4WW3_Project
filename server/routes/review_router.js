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
                    rating: reviewData.RATING
                }
            )
        }

        res.status(200).send(JSON.stringify(formattedReviewData));
    });
});

module.exports = api;