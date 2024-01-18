//import the express
const express = require("express");
const mongoose = require("mongoose");
const Blog = require("./models/blog");

//create the instance of our app
const app = express();

//database connection
const dbURI =
  "mongodb+srv://rudalkunwar:messi10@cluster0.frsepin.mongodb.net/nodeDB?retryWrites=true&w=majority";
mongoose
  .connect(dbURI)
  .then((result) => {
    app.listen(3000);
  })
  .then((error) => {
    console.log(error);
  });
//lets set oour view engine

app.set("view engine", "ejs");
//listen which means activate the server in port 3000

//now lets make our routes
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/blogs", (req, res) => {
  Blog.find().then((result)=>{
    res.render('blogs',{blogs:result});
  }).then((error)=>{
    console.log(error);
  })
});

app.get("/blogs/add", (req, res) => {
  res.render("addblog");
});

app.use((req, res) => {
  res.status(404).render("404");
});
