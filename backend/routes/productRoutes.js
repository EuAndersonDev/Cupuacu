const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");


router.get("/", productController.getAll);
router.post("/products", productController.createProduct);
router.put("/products/:id", productController.updateProduct);

module.exports = router;