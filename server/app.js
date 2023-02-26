const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

dotenv.config({ path: './.env' });
const port = process.env.PORT;

// DB Connection
require('./db/config.js');

// Models
require('./models/userSchema.js');

// Express App
const app = express();

// Console JSON data
app.use(express.json());
app.use(cookieParser());

app.use(require('./router/auth'));

app.get('/', (req, res) => {
    res.send('Hello from the other side aap.js!')
});
app.get('/about', (req, res) => {
    res.send('About Page')
});
app.get('/contact', (req, res) => {
    res.send('Contact Page')
});
app.get('/login', (req, res) => {
    res.send('LogIn Page')
});
app.get('/register', (req, res) => {
    res.send('Registeration Page')
});

// Server
app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`)
});

