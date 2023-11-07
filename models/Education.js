// models/Education.js
const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema({
  degree: String,
  college: String,
  location: String,
  graduationDate: String,
});

module.exports = mongoose.model("Education", educationSchema);
