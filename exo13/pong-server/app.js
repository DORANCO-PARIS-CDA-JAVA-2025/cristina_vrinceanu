const http = require("http");

const hostname = "0.0.0.0";
const port = 80;

const server = http.createServer((req, res) => {
  if (req.url === "/ping") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("PONG");
  } else {
    res.statusCode = 404;
    res.end("Not Found");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
