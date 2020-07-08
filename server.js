const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3030;
const routes = require("./routes/api");

mongoose.connect(process.env.MONGODB_URI || process.env.DB_CONNECT, {
  userNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to database");
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// HTTP request logger
app.use(morgan("tiny"));

app.use("/api", routes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  //   uri = process.env.MONGODB_URI; // connection string for Atlas here
}

app.listen(PORT, console.log(`Server starting at ${PORT}`));
