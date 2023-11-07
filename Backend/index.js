const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors"); // Import the CORS middleware
const authRoutes = require("./routes/auth");
const patientRoutes = require("./routes/patients");


dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors()); // Use CORS middleware to handle cross-origin requests

// Routes
app.use("/auth", authRoutes);
app.use("/patients", patientRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong on the server" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Database connection
mongoose
  .connect(process.env.MONGODB_ATLAS_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("Error connecting to MongoDB Atlas:", err));
