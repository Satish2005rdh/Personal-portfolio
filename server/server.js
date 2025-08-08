// server.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

// Load .env before doing anything else
dotenv.config();

// DB connection
const connectDB = require('./config/db');
connectDB();  // ✅ Now it will use the MONGO_URI from .env

const contactRoutes = require('./routes/contact');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
