var http = require('http');
http.createServer(function (req, res) {
  res.write("GLITCH_.404");
  res.end();
}).listen(8080);
