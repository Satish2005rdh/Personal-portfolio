const express = require('express');
const Contact = require('../models/Contact');
const router = express.Router();

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // ✅ Allow all origins
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Your existing logic (saving to MongoDB, etc.)
  router.post('/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();
    res.json({ success: true });
  } catch (err) {
    console.error('❌ Error saving contact:', err);
    res.status(500).json({ success: false, error: 'Server error' });
  }
});
};