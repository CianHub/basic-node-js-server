const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  //process.exit();
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Index</title></head>');
    res.write(
      '<body><h1>Index</h1><form action="/1" method="POST"><input type="text" name="input"><button type="submit">Click</button></form></body>'
    );
    res.write('</html>');
    return res.end();
  } else if (url === '/1' && method === 'POST') {
    fs.writeFileSync('message.txt', 'DUMMY');
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  } else {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Not The Index</title></head>');
    res.write('<body><h1>Not The Index</h1></body>');
    res.write('</html>');
    return res.end();
  }
});

server.listen(3000);
