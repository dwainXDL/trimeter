// index.js
const express = require('express');
const session = require('express-session');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Trust proxy (Azure)
app.set('trust proxy', 1);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Session configuration
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    proxy: true,
    cookie: {
        secure: true,
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 12, // 12 hours
        sameSite: 'lax'
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

// Routes will be added here
// TODO: Add auth routes, customer routes, etc.

// Start server
app.listen(PORT, () => {
    console.log(`TriMeter server running on port ${PORT}`);
    console.log(`Database: ${process.env.DB_DATABASE}`);
});

// Export for testing
module.exports = app;
