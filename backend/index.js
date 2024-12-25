const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Connect to MongoDB
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => {
        console.error("Failed to connect to MongoDB", err);
        process.exit(1); // Exit if the database connection fails
    });

// Middleware
app.use(cors());
app.use(express.json()); // Replaces body-parser

// Routes
app.get("/", (req, res) => {
    res.send("Backend is up and running!");
});

// Routes
const formRoutes = require("./routes/form");
app.use("/api/form", formRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
