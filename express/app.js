//const http = require('http');

const express=require('express');
//local module
const requestHandler=require('./user');
const { nextTick } = require('process');

const app=express();
app.get("/",(req,res,next)=>{
  console.log("came in 1st middleware", req.url,req.method);
  next();
});
app.use("/submit-details",(req,res,next)=>{
  console.log("came in 2nd middleware", req.url,req.method);
  res.send("<p>welcome to complete coding</p>")
});
app.use("/",(req,res,next)=>{
  console.log("came in another middleware", req.url,req.method);
  res.send("<p>came from another middleware</p>");
  
});



//const server = http.createServer(app);

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});