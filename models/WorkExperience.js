// models/WorkExperience.js
const mongoose = require("mongoose");

const workExperienceSchema = new mongoose.Schema({
  position: String,
  company: String,
  location: String, 
  startDate: String,
  endDate: String,
  description: String,
});

module.exports = mongoose.model("WorkExperience", workExperienceSchema);
