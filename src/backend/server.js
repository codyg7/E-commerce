const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
// const path = require("path");

const app = express();
const PORT = process.env.PORT || 3030;
const routes = require("./routes/api");

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://codyg7:Zfri11-02@cluster0.9d8iz.mongodb.net/codyg7?retryWrites=true&w=majority",
  {
    userNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.connection.on("connected", () => {
  console.log("Connected to database");
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// HTTP request logger
app.use(morgan("tiny"));

app.use("/api", routes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
  //   uri = process.env.MONGODB_URI; // connection string for Atlas here
}

app.listen(PORT, console.log(`Server starting at ${PORT}`));
