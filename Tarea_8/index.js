const http = require('http');

const hostname = 'localhost';
const port = 3006;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Dylan Missael Nieto Vargas 319028005');
});

server.listen(port, hostname, () => {
  console.log(`Servidor en http://${hostname}:${port}/`);
});