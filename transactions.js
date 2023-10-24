"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var transactions = express.Router();
transactions.get("/", function (req, res) {
    res.status(200).json({ "message": "transactions done by the customer" });
});
exports.default = transactions;
