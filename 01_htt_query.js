//import the url module
//how can we import url module?
// we need require function
let http=require("http");
let url = require("url");
//if the module imported successfully it gives an object here the object is url object
//url module is also predefined
//url module available along with node software
//how to create http server
let server = http.createServer((req, res) => {
    //set the mime type here
    res.writeHead(200, {"content-type": "text/html"});
    // here the mime type is html type

    // query parameter coming from client side
    //how to read the query parameter we need url module
    let obj = url.parse(req.url,true).query;
    // if you want to read the value one boolean value you need to pass 
    //(if we given true then node engine is allow you to parse the url)
    //how to pass the request
    // check the condition if it is true then run the first query and 
    //if not then run the second
    if(obj.uname === "soubhagya" && obj.upwd === "soubhagya")
    {
        res.write("<h1>Login Success</h1>");
    }
    else{
        res.write("<h1>Login Failed</h1>");
    }
    res.end();
});

server.listen(8080);
console.log("server listening port no 8080");