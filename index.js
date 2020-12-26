const express = require("express");
const app = express();

const PORT = 4000;

function handleHome(req, res) {
  res.send("Hello from home");
}

function handleProfile(req, res) {
  res.send("You are on my profile");
}

app.get("/", handleHome);

app.get("/profile", handleProfile);

function handleListening() {
  console.log(`Listening on: wwhttp://localhost:${PORT}`);
}

app.listen(PORT, handleListening);
