const http = require("http");
const fs = require("fs");
const _ = require('lodash');

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  // res.write('<h1>Hi i am the destroyer</h1>');
  const route = req.url;
  console.log(route);
  console.log(_.random(1,100));
  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/home":
      path += "index.html";
      res.statusCode = 301;
      res.setHeader('Location','/');
      res.end();
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    default:
      path += "404.html";
      res.statusCode = 404;

      break;
  }
  fs.readFile(path, (error, data) => {
    if (error) {
      console.log(error);
      res.end();
    } else {
      res.end(data);
    }
  });
});
server.listen(3000, "localhost", () => {
  console.log("Server is created");
});
