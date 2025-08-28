const express = require("express");
const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("Landing");
});
app.get("/aboutus", (req, res) => {
  res.render("aboutus");
});
app.get("/get-started", (req, res) => {
  res.render("signup/signup");
});
app.get("/signin", (req, res) => {
  res.render("signUp/getStarted");
});
app.listen(3000);
