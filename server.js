const http = require("http");

const requestListiner = (request, response) => {
  response.setHeader("Content-Type", "text/html");

  response.statusCode = 200;

  const { method } = request;

  if (method === "GET") {
    response.end("<h1>Hallo world</h1>");
  }

  if (method === "POST") {
    response.end("<h1>Hai!!</h1>");
  }

  if (method === "PUT") {
    response.end("<h1>Salamm!</h1>");
  }

  if (method === "DELETE") {
    response.end("<h1>Bonjourr!</h1>");
  }
};

const server = http.createServer(requestListiner);
const port = 5000;
const host = "localhost";

server.listen(port, host, () => {
  console.log(`Server is running at http://${host}:${port}`);
});
