import * as express from "express";

let transactions:any=express.Router();
  
transactions.get("/",(req:any, res:any):any =>{
    res.status(200).json({"message":"transactions done by the customer"})
});


export default transactions;