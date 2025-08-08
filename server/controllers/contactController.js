// controllers/contactController.js
const Contact = require('../models/Contact');

const submitContactForm = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    const contact = new Contact({ name, email, subject, message });
    await contact.save();

    res.status(200).json({ success: true, message: 'Message saved!' });
  } catch (error) {
    console.error('Error in submitContactForm:', error.message);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

module.exports = { submitContactForm };
