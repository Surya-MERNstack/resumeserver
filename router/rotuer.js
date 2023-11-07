// routes/resume.js
const express = require("express");
const router = express.Router();
const WorkExperience = require("../models/WorkExperience");
const Education = require("../models/Education");

// Route to get all Work Experience items
router.get("/workexperience", async (req, res) => {
  try {
    const workExperienceItems = await WorkExperience.find();
    res.json(workExperienceItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to create a new Work Experience item
router.post("/workexperience", async (req, res) => {
  const workExperienceItem = new WorkExperience(req.body);
  try {
    const savedItem = await workExperienceItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route to get all Education items
router.get("/education", async (req, res) => {
  try {
    const educationItems = await Education.find();
    res.json(educationItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to create a new Education item
router.post("/education", async (req, res) => {
  const educationItem = new Education(req.body);
  try {
    const savedItem = await educationItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
