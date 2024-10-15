const express = require("express");
const router = express.Router();

const productRoutes = require("./productRoutes"); // Importa as rotas do produto

// Defina suas rotas aqui
router.use("/products", productRoutes); // Use o prefixo '/products' para as rotas de produtos

module.exports = router;
