// // how to import ("http module")---> by using require function--->require()

// let http= require("http");
// //if http module imported successfully then it create an object 
// // which object---> http object

// //how to create the server
// let server = http.createServer((req,res)=>{
//     //createServer() return a server instance 
//     //what are the arguments here(req,res)-->
//     //req-->if we need data from the client application at that time we need req object 
//     //res-->how to give the reply to the client
//     res.write("Welcome to the Server");
//     //how to send the response to the client with the help of write()
//     res.end();
// });

// server.listen(8080);
// console.log("Server listening the port number 8080");


let http= require("http");

let server=http.createServer((req,res)=>{
    res.write("Welcome to node js");
    res.end();
});

server.listen(8080);
console.log("server listening the port number 8080");
