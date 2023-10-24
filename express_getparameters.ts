//how to import express module

import * as express from "express";

//how to create rest object
let app :any = express();
//whenever we called the rest object automatically one object is created
//any here the type of the object

//how to create the get request
app.get("/login/uname/:uname/upwd/:upwd",(req:any,res:any):any=>{
      if(req.params.uname==="soubhagya"&& req.params.upwd==="soubhagya7"){
         res.status(200).json({
            login:"success"
         })
      }else{
        res.status(400).json({
            login:"fail"
        })
      }
})
//sample is the argument one
//()--->is the argument two
//req---->it recieve the data from the client application
//res----->is used from sending reply/response to client application
//:any--->return any datatypes



//how to assign the port number to the server

app.listen(8080,()=>{
     console.log("server running successfully");
});
//when port number assigned successfully automatically one callback functions executed here.
