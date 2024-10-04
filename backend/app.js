const express = require('express');
const app = express();
const cors = require('cors');
const db = require('../config/db');

const productRoutes = require('./routes/productRoutes');
app.use('/products', productRoutes);
app.use(express.json());
app.use(cors());

module.exports = app;
