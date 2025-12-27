const express=require('express');
const app=express();

app.use((req,res,next)=>{
  console.log("1st dummy", req.url,req.method);
  next();
});
app.use((req,res,next)=>{
  console.log("2nd dummy", req.url,req.method);
  next();
});
//app.use("/",(req,res,next)=>{
  //console.log("3rd middleware", req.url,req.method);
  //res.send("<h1>welcome</h1");
  
//});

app.get("/", (req, res, next) => {
  console.log("Handling / for GET", req.url, req.method);
  res.send(`<h1>Welcome to Complete Coding</h1>`);
})

app.get("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us for GET", req.url, req.method);
  res.send(
    `<h1>Please give your details here</h1>
    <form action="/contact-us" method="POST">
      <input type="text" name="name" placeholder="Enter your name" />
      <input type="email" name="email" placeholder="Enter your Email" />
      <input type="Submit" />
    </form>
    `);
});
//incoming-post
app.post("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us for POST", req.url, req.method);
  res.send(`<h1>We will contact you shortly</h1>`);
})


const PORT=3002;
app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`);
});