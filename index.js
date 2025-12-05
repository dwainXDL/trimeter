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

// Routes
// Login page
app.get('/login', (req, res) => {
    if (req.session.user) {
        return res.redirect('/dashboard');
    }
    res.render('login', { error: null });
});

// Admin login page
app.get('/admin-login', (req, res) => {
    if (req.session.user) {
        return res.redirect('/dashboard');
    }
    res.render('admin-login', { error: null });
});

// Field Officer login page
app.get('/field-officer-login', (req, res) => {
    if (req.session.user) {
        return res.redirect('/dashboard');
    }
    res.render('field-officer-login', { error: null });
});

// Cashier login page
app.get('/cashier-login', (req, res) => {
    if (req.session.user) {
        return res.redirect('/dashboard');
    }
    res.render('cashier-login', { error: null });
});

// Manager login page
app.get('/manager-login', (req, res) => {
    if (req.session.user) {
        return res.redirect('/dashboard');
    }
    res.render('manager-login', { error: null });
});

// Root redirect to login
app.get('/', (req, res) => {
    if (req.session.user) {
        return res.redirect('/dashboard');
    }
    res.redirect('/login');
});

// Start server
app.listen(PORT, () => {
    console.log(`TriMeter server running on port ${PORT}`);
    console.log(`Database: ${process.env.DB_DATABASE}`);
});

// Export for testing
module.exports = app;
