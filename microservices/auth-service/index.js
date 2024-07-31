const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoute');

const app = express();
const port = 3002;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/auth', authRoutes);

app.listen(port, () => {
    console.log(`Auth Service running on http://localhost:${port}`);
});
