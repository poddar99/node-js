const http = require('http');
const testingSysntax = require('./syntax');
const runtime=require('./runtime');
const server = http.createServer((req,res)=>{
    console.log(req.url,req.method);
    testingSysntax();
    runtime();
});

const PORT = 3002;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});