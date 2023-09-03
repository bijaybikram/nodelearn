const express = require("express"); // requiring express package
const app = express(); // storing it in app, app vanney variable throughout use garney

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/contact", (req, res) => {
  res.send("<h1>My Contact</h1>");
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.listen(3000, function () {
  console.log("NodeJS project has started at port 3000");
});
