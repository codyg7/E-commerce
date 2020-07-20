const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3030;
const routes = require("./routes/api");

// Mongoose connection
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

// Import routes
// const authRoute = require("./routes/api");

//  Routes middleware
app.use("/api/user", routes);

if (process.env.NODE_ENV == "production") {
  app.use(express.static(path.join(__dirname, "./client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build", "index.html"));
  });
}

app.listen(PORT, console.log(`Server starting at ${PORT}`));
