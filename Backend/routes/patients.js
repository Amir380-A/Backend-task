const express = require('express');
const { requireAuth } = require('../middleware/auth')
const Patient = require('../models/patient');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (error) {
    res.status(500).json({ message: 'An error occurred' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const patient = await Patient.findById(id);

    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }

    res.json(patient);
  } catch (error) {
    res.status(500).json({ message: 'An error occurred' });
  }
});

router.post('/', async (req, res) => {
  try {
    const newPatient = req.body;
    const patient = await Patient.create(newPatient);

    // Send notification email to patient
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.USER_GMAIL,
        pass: process.env.GMAIL_PASSWORD
      }
    });

    try {
      const info = await transporter.sendMail({
        from: process.env.USER_GMAIL,
        to: patient.email,
        subject: 'Welcome to Our Medical Portal',
        text: 'Thank you for registering with our medical portal!'
      });

      console.log('Email sent:', info.response);
    } catch (error) {
      console.log('Error sending email:', error);
    }

    res.status(201).json(patient);
  } catch (error) {
    res.status(500).json({ message: 'An error occurred' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const dataToUpdate = req.body;

    const updatedPatient = await Patient.findByIdAndUpdate(id, dataToUpdate, { new: true });

    if (!updatedPatient) {
      return res.status(404).json({ message: 'Patient not found' });
    }

    // Send notification email to patient
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.USER_GMAIL,
        pass: process.env.GMAIL_PASSWORD
      }
    });

    try {
      const info = await transporter.sendMail({
        from: process.env.USER_GMAIL,
        to: updatedPatient.email,
        subject: 'Profile Update',
        text: 'Your profile has been updated.'
      });

      console.log('Email sent:', info.response);
    } catch (error) {
      console.log('Error sending email:', error);
    }

    res.json(updatedPatient);
  } catch (error) {
    res.status(500).json({ message: 'An error occurred' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const deletedPatient = await Patient.findByIdAndDelete(id);

    if (!deletedPatient) {
      return res.status(404).json({ message: 'Patient not found' });
    }

    // You can also send a notification email to the patient here if needed

    res.json({ message: 'Patient deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred' });
  }
});

module.exports = router;
