// server.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const contactRoutes = require('./routes/contact');
// Load .env
dotenv.config();

// Connect to MongoDB (cached for Vercel)
connectDB();

const app = express();

// Allow frontend to connect (both local and deployed)
app.use(cors({
  origin: [
    'https://personal-portfolio-9i23.vercel.app/' // Deployed frontend
  ],
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());

// Routes
app.use('/api', contactRoutes);

// Export app for Vercel serverless
module.exports = app;
