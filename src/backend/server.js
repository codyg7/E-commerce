const express = require("express");
// const mongoose = require("mongoose");
const morgan = require("morgan");
// const path = require("path");

const app = express();
const PORT = process.env.PORT || 3030;

// HTTP request logger
app.use(morgan("tiny"));

app.get("/api", (req, res) => {
  const data = {
    username: "codyg7",
    age: "6",
  };
  res.json();
});

app.get("/api/name", (req, res) => {
  const data = {
    username: "bob",
    age: "6",
  };
  res.json();
});

app.listen(PORT, console.log(`Server starting at ${PORT}`));
