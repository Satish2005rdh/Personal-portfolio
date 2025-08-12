const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('../config/db');
const contactRoutes = require('../routes/contact');

dotenv.config();
connectDB();

const app = express();

app.use(cors({
  origin: [
    // 'http://localhost:3000/',
    'https://personal-portfolio-9i23.vercel.app/' // Deployed frontend
  ],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
}));
app.use(express.json());

app.use('/api', contactRoutes);

module.exports = app;
