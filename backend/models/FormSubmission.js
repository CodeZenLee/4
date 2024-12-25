const mongoose = require("mongoose");

const formSubmissionSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  company: { type: String, required: true },
  projectDetails: { type: String, required: true },
  submittedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("FormSubmission", formSubmissionSchema);
