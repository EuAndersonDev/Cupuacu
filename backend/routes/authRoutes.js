const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');

// Registro
router.post('/register', userController.createUser);

// Login
router.post('/login', authController.login);

// Logout
router.post('/logout', authController.logout);

module.exports = router;
