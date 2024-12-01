const productModel = require("../models/productModel");
const express = require('express');
const router = express.Router();
const Product = require('../models/productModel');

router.get('/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Failed to find Products ', error });
    }
});
const getAll = async (req, res) => {
    try {
        const products = await productModel.getAll(); 
        return res.status(200).json(products);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Failed to retrieve products' });
    }
};

const getProductById = async (req, res) => {
    const { id } = req.params; 
    try {
        const product = await productModel.getProductById(id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' }); 
        }
        return res.status(200).json(product); 
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Failed to retrieve product' });
    }
};

const createProduct = async (req, res) => {
    try {
        const { name, description, price, stock_quantity } = req.body;
        const createdProduct = await productModel.createProduct({ 
            name, 
            description, 
            price, 
            stock_quantity 
        });
        return res.status(201).json(createdProduct);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Failed to create product' });
    }
};


const updateProduct = async (req, res) => {
    try {
        const updatedProduct = await productModel.updateProduct(req.params.id, req.body);
        return res.status(200).json(updatedProduct);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Failed to update product' });
    }
};

const deleteProduct = async (req, res) => {
    const { id } = req.params; 
    try {
        const result = await productModel.deleteProduct(id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Product not found' }); 
        }
        return res.status(200).json({ message: 'Product successfully deleted' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Failed to delete product' });
    }
};





module.exports = {
    getAll,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductById,
    router
}