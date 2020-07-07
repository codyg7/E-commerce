const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
// const path = require("path");

const app = express();
const PORT = process.env.PORT || 3030;

mongoose.connect(
  "mongodb+srv://codyg7:Zfri11-02@cluster0.9d8iz.mongodb.net/codyg7?retryWrites=true&w=majority",
  {
    userNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const connection = mongoose.connection;

connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
});

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
