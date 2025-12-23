const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url,req.method,req.headers);
  if(req.url==='/'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>complete coding</title></head>');
    res.write('<body><h1>like /share</h1></body');
    res.write('</html');
    res.end();

  }else if(req.url==='/products'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>complete coding</title></head>');
    res.write('<body><h1>like /share</h1></body');
    res.write('</html');
    res.end();

  }
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>complete coding</title></head>');
    res.write('<body><h1>like /share</h1></body');
    res.write('</html');
    res.end();//cant write end after writing one end
  
  
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});