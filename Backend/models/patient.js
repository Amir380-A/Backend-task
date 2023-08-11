// models/Patient.js
const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: String,
  email: String,
  disease: String, // Use lowercase for field names (e.g., 'disease' instead of 'Disease')
  comment: String
  // Add more fields as needed
});

module.exports = mongoose.model('Patient', patientSchema);