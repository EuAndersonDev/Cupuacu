const express = require('express');
const router = express.Router();

// Importar as rotas individuais
const productRoutes = require('./productRoutes'); 
const userRoutes = require('./userRoutes');
const orderRoutes = require('./orderRoutes');
const cartRoutes = require('./cartRoutes');
const authRoutes = require('./authRoutes');
// Usar as rotas
router.use('/', productRoutes); // As rotas de produtos serão usadas na raiz, sem prefixo
router.use('/', userRoutes);
router.use('/', orderRoutes); // As rotas de pedidos serão prefixadas com '/orders'
router.use('/', cartRoutes); // As rotas de carrinho serão prefixadas com '/cart'
router.use('/auth', authRoutes); // As rotas de autenticação serão prefixadas com '/auth'
// Adicionar mais rotas se necessário (ex.: para usuários, pedidos, etc.)
// router.use('/users', userRoutes);

module.exports = router;
