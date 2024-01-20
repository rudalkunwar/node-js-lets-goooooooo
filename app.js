//import the express
const express = require("express");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");

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
    // console.log(error);
  });
//lets set oour view engine
app.set("view engine", "ejs");


//convert url data to readable
app.use(express.urlencoded({ extended: true }));

//now lets make our routes
app.use('/blog',blogRoutes);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.use((req, res) => {
  res.status(404).render("404");
});
