"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var accounts = express.Router();
accounts.post("/", function (req, res) {
    res.status(200).json({ "message": "accounts open" });
});
exports.default = accounts;
