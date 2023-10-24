import * as express from "express";

let accounts=express.Router();

accounts.post("/",(req:any,res:any):any=>{
    res.status(200).json({"message": "accounts open"})
});

export default accounts;