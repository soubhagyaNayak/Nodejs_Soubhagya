"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import express module
var express = require("express");
//how to create rest object
var app = express();
//any here is the datatype
//app object here used to develop the rest services
//ex:-- get,put,post,delete
//get request
app.get("/demo", function (req, res) {
    res.status(200).json({
        "message": "default get services"
    });
});
app.listen(8080, function () {
    console.log("server running succesfully");
});
