const http = require('http');

const server = http.createServer((req, res) => {
  //process.exit();
  const url = req.url;
  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Index</title></head>');
    res.write('<body><h1>Index</h1></body>');
    res.write('</html>');
    res.end();
  } else {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Not The Index</title></head>');
    res.write('<body><h1>Not The Index</h1></body>');
    res.write('</html>');
    res.end();
  }
});

server.listen(3000);
