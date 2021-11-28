"use strict";

const express = require('express');
const api = express.Router();

var users = []
// Get list of users
api.get('/', function(req, res) {
    res.status(200).send(users);
});

api.post('/', function(req, res) {
    res.status(200).send("Successfully added user");
});

module.exports = api;