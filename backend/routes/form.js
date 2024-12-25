const express = require("express");
const router = express.Router();
const FormSubmission = require("../models/FormSubmission");

// POST route to handle form submissions
router.post("/", async (req, res) => {
  try {
    const { firstName, lastName, email, company, projectDetails } = req.body;

    // Create a new submission
    const newSubmission = new FormSubmission({
      firstName,
      lastName,
      email,
      company,
      projectDetails,
    });

    // Save to database
    await newSubmission.save();

    res.status(201).json({ message: "Form submitted successfully!" });
  } catch (error) {
    console.error("Error saving form submission:", error);
    res.status(500).json({ message: "Failed to submit form. Please try again later." });
  }
});

module.exports = router;
