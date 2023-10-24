//it is the 3rd party module in nodejs...
//express is the framework(somebody says express is the rest framework)

//use
//express framework used to develop the rest services

//ex:: get,put,post,delete,....

//how to import express module here
//using require function
let express = require("express");

//how can we create rest object

let app =express();
//when we call express of and  it automatically create an object(app object here)

app.get("/",(req,res)=>{
    res.status(200).json({
        "message":"default get request"
    })
});

app.get("/demo",(req,res)=>{
    res.status(200).json({
        "message":"data from mongodb coming soon"
    })
});

app.post("/",(req,res)=>{
    res.status(200).json({
        "message":"defalut post request"
    })
});

app.post("/demo",(req,res)=>{
    res.status(200).json({
        "message":"data from xyz coming soon"
    })
});

app.listen( 8080,( )=>{
   console.log("server running successfully");
});