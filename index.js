// index.js
const express = require('express');
const session = require('express-session');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Session configuration
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 12 // user logged out after 12 hours
    }
}));

// View Engine Setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// User to be seen on all views
app.use((req, res, next) => {
    res.locals.user = req.session.user || null;
    next();
});

// Test route
app.get('/', (req, res) => {
    res.send('TriMeter IS RUNNING!');
});

// Test DB
app.get('/test-db', async (req, res) => {
    try {
        const { poolPromise } = require('./config/database');
        const pool = await poolPromise;
        const result = await pool.request().query('SELECT @@VERSION AS version');
        res.json({
            message: 'Database Connected!',
            version: result.recordset[0].version
        });
    }
    catch (err) {
        res.status(500).json({
            message: 'Database connection failed!',
            error: err.message
        });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Test DB: http://localhost:${PORT}/test-db`);
});
