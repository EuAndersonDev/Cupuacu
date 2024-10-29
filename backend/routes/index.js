const express = require('express');
const router = express.Router();

// Importar as rotas individuais
const productRoutes = require('./productRoutes'); 
const userRoutes = require('./userRoutes');
// Usar as rotas
router.use('/', productRoutes); // As rotas de produtos serão usadas na raiz, sem prefixo
router.use('/', userRoutes);
// Adicionar mais rotas se necessário (ex.: para usuários, pedidos, etc.)
// router.use('/users', userRoutes);

module.exports = router;
