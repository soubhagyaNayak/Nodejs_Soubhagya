//import express module
import * as express from "express";
//how to create rest object
let app:any=express();
//any here is the datatype

//app object here used to develop the rest services
//ex:-- get,put,post,delete

//get request

app.get("/demo",(req:any,res:any):any=>{
   res.status(200).json({
    "message":"default get services"
   })
});

app.listen(8080,()=>{
    console.log("server running succesfully");
})

