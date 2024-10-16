const express = require('express');
const router = express.Router();

// Importar as rotas individuais
const productRoutes = require('./productRoutes'); 

// Usar as rotas
router.use('/', productRoutes); // As rotas de produtos serão usadas na raiz, sem prefixo

// Adicionar mais rotas se necessário (ex.: para usuários, pedidos, etc.)
// router.use('/users', userRoutes);

module.exports = router;
