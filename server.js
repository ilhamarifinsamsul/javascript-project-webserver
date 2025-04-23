const http = require("http");

const requestListiner = (request, response) => {
  response.setHeader("Content-Type", "text/html");

  response.statusCode = 200;
  response.end("<h1>Hallo HTTP Server</h1>");
};

const server = http.createServer(requestListiner);
const port = 5000;
const host = "localhost";

server.listen(port, host, () => {
  console.log(`Server is running at http://${host}:${port}`);
});
