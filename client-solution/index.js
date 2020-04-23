const express = require("express");
const path = require("path");
const { api, port } = require("./config");

// Create the Express app.
const app = express();

// Set the pug view engine.
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

//middleware for custom render
app.use((req, res, next) => {
  res.myRender = (path) => {
    res.render(path, { api });
  };
  next();
});

// Define a route.
app.get("/", (req, res) => {
  res.myRender("index");
});

app.get("/sign-up", (req, res) => {
  res.myRender("sign-up");
});

app.get("/log-in", (req, res) => {
  res.myRender("log-in");
});

app.get("/create", (req, res) => {
  res.myRender("create");
});

app.get("/profile", (req, res) => {
  res.myRender("profile");
});

// Define a port and start listening for connections.

app.listen(port, () => console.log(`Listening on port ${port}...`));
