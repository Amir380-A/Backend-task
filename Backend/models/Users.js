// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  role: {
    type: String,
    enum: ["medicalprofessional", "normaluser"],
    default: "medicalprofessional",
  },
});

module.exports = mongoose.model("User", userSchema);
