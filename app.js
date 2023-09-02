const express = require("express"); // requiring express package
const app = express(); // storing it in app, app vanney variable throughout use garney

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/contact", (req, res) => {
  res.send("<h1>My Contact</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>Bye World</h1>");
});

app.listen(3000, function () {
  console.log("NodeJS project has started at port 3000");
});
