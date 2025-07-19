const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
  date: String,
  entry: String,
  exit: String,
  duration: Number,
});

module.exports = mongoose.model("Session", sessionSchema);
