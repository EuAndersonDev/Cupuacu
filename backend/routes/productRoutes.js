const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");
const middleware = require("../middlewares/productMiddleware");

router.get("/products", productController.getAll);
router.post("/", middleware.validateProductData, productController.createProduct);
router.put("/products/:id", middleware.validateUpdateProduct, productController.updateProduct);
router.delete("/products/:id", productController.deleteProduct);

module.exports = router;