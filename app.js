//import module
const express = require("express");

//let initilize our app
const app = express();

//lets listen our app
app.listen(3000);

app.get("/", (req, res) => {
  res.sendFile("./views/index.html", { root: __dirname });
});
app.get("/about", (req, res) => {
  res.sendFile("./views/about.html", { root: __dirname });
});
app.get("/home", (req, res) => {
  res.redirect("/");
});
app.use((req, res) => {
  res.status(404).sendFile("./views/404.html", { root: __dirname });
});