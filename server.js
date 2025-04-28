const http = require("http");

const requestListiner = (request, response) => {
  response.setHeader("Content-Type", "application/json");
  response.setHeader("Powered-By", "Node.js");

  // response.statusCode = 200;

  const { method, url } = request;

  if (url === "/") {
    if (method === "GET") {
      response.statusCode = 200;
      response.end(
        JSON.stringify({
          message: "Ini adalah halaman homepage",
        })
      );
    } else {
      response.statusCode = 400;
      response.end(
        JSON.stringify({
          message: `Halaman tidak dapat diakses dengan ${method} request`,
        })
      );
    }
  } else if (url === "/about") {
    // TODO 3: Logika respons bila url bernilai '/about
    if (method === "GET") {
      // respon bila client menggunakan GET request
      response.statusCode = 200;
      response.end(
        JSON.stringify({
          message: "Haloo!, ini adalah halaman about",
        })
      );
    } else if (method === "POST") {
      // respon bila client menggunakan POST request
      let body = [];

      request.on("data", (chunk) => {
        body.push(chunk);
      });

      request.on("end", () => {
        body = Buffer.concat(body).toString();
        const { name } = JSON.parse(body);
        response.statusCode = 200;
        response.end(
          JSON.stringify({
            message: `Halo!, ${name} ini adalah halaman about`,
          })
        );
      });
    } else {
      // respons bila client tidak menggunakan GET ataupun POST
      response.statusCode = 400;
      response.end(
        JSON.stringify({
          mesaage: `Halaman tidak dapat diakses dengan ${method} request`,
        })
      );
    }
  } else {
    // TODO 1: Logika respons bila url bukan '/' atau '/about'
    response.statusCode = 404;
    response.end(
      JSON.stringify({
        message: "Halaman tidak ditemukan",
      })
    );
  }

  //   if (method === "GET") {
  //     response.end("<h1>Hallo world</h1>");
  //   }

  //   if (method === "POST") {
  //     let body = [];
  //     request.on("data", (chunk) => {
  //       body.push(chunk);
  //     });

  //     request.on("end", () => {
  //       body = Buffer.concat(body).toString();
  //       const { name } = JSON.parse(body);
  //       response.end(`<h1> Haii, ${name}</h1>`);
  //     });
  //   }
};

const server = http.createServer(requestListiner);
const port = 5000;
const host = "localhost";

server.listen(port, host, () => {
  console.log(`Server is running at http://${host}:${port}`);
});
