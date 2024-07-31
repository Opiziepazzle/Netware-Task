const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');
const redis = require('redis');

const app = express();
const port = 3003;

// Connect to MongoDB
mongoose.connect('mongodb://localhost/productdb', { useNewUrlParser: true, useUnifiedTopology: true });

// Initialize Redis client
const redisClient = redis.createClient();


// Middleware
app.use(express.json());

// Routes
app.use('/products', productRoutes);

app.listen(port, () => {
    console.log(`Product Service running on http://localhost:${port}`);
});
