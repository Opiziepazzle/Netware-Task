const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const redis = require('redis');

const app = express();
const port = 3001;

// Connect to MongoDB
mongoose.connect('mongodb://localhost/userdb', { useNewUrlParser: true, useUnifiedTopology: true });

// Initialize Redis client
const redisClient = redis.createClient();

// Middleware
app.use(express.json());

// Routes
app.use('/users', userRoutes);

app.listen(port, () => {
    console.log(`User Service running on http://localhost:${port}`);
});
