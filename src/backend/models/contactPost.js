const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ContactPostSchema = new Schema({
  name: {
    type: String,
    required: true,
    min: 6,
  },
  email: {
    type: String,
    required: true,
    max: 255,
  },
  password: {
    type: String,
    required: true,
    max: 1024,
    min: 6,
  },
  phonenumber: {
    type: String,
  },
  comment: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("ContactPost", ContactPostSchema);
