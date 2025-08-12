const express = require('express');
const Contact = require('../models/Contact');
const router = express.Router();
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
module.exports = router;
