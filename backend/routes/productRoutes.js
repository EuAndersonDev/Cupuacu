const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");


router.get("/products", productController.getAll);
router.get('/products/:id', productController.getProductById);
router.post("/products", productController.createProduct);
router.put("/products/:id", productController.updateProduct);
router.delete("/products/:id", productController.deleteProduct);
router.post('/products/:id/decreaseStock', productController.decreaseStock);

module.exports = router;