"use strict";

const express = require('express');
const api = express.Router();

var testReviews = [];
var testReview1 = {
    name: "Test Review",
    review: "Hello"
};

// Get of reviews
api.get('/', function(req, res) {
    testReviews.push(testReview1);
    res.status(200).send(testReviews);
});

module.exports = api;