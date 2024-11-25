const express = require('express');
const router = express.Router();

// Importar as rotas individuais
const productRoutes = require('./productRoutes'); 
const userRoutes = require('./userRoutes');
const orderRoutes = require('./orderRoutes');
const cartRoutes = require('./cartRoutes');
const authRoutes = require('./authRoutes');

// Usar as rotas
router.use('/products', productRoutes); // As rotas de produtos serão usadas com o prefixo '/products'
router.use('/users', userRoutes); // As rotas de usuários serão usadas com o prefixo '/users'
router.use('/orders', orderRoutes); // As rotas de pedidos serão usadas com o prefixo '/orders'
router.use('/cart', cartRoutes); // As rotas de carrinho serão usadas com o prefixo '/cart'
router.use('/auth', authRoutes); // As rotas de autenticação serão prefixadas com '/auth'

module.exports = router;