const http = require("node:http");
const hostname = "127.0.0.1";
const port = 4000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("hello everyone!\n");
});

server.listen(port, hostname, () => {
  console.log(`server berjalan di port ${port}`);
});
