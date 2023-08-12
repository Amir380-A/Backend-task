// models/Patient.js
const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: String,
  email: String,
  disease: String, 
  comment: String
 
});

module.exports = mongoose.model('Patient', patientSchema);