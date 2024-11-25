const productModel = require('../models/productModel');

const getAllProducts = async (req, res) => {
    try {
        const products = await productModel.getAll();
        return res.status(200).json(products);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Failed to retrieve products" });
    }
};

const getProductById = async (req, res) => {
    try {
        const product = await productModel.getProductById(req.params.id);
        return res.status(200).json(product);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Failed to retrieve product" });
    }
};

const createProduct = async (req, res) => {
    try {
        const { name, description, price, stock_quantity } = req.body;
        const createdProduct = await productModel.createProduct({ name, description, price, stock_quantity });
        return res.status(201).json(createdProduct);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Failed to create product" });
    }
};

const updateProduct = async (req, res) => {
    try {
        const updatedProduct = await productModel.updateProduct(req.params.id, req.body);
        return res.status(200).json(updatedProduct);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Failed to update product" });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const result = await productModel.deleteProduct(req.params.id);
        return res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Failed to delete product" });
    }
};

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};