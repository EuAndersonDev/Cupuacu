const express = require('express');
const router = express.Router();
const { login, logout } = require('../controllers/authController');
const userController = require('../controllers/userController');

// Registro
router.post('/register', userController.createUser);

// Login
router.post('/login', login);


module.exports = router;
