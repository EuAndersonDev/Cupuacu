const productModel = require("../models/productModel");

const getAll = async (req, res) => {
    try {
        const products = await productModel.getAll();
        return res.status(200).json(products);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Failed to fetch products' });
    }
};

const createProduct = async (req, res) => {
    try {
        const { name, description, price, image, stock_quantity } = req.body;

        // Verificar se todos os campos estão presentes
        if (!name || !description || !price || !image || !stock_quantity) {
            return res.status(400).json({ error: 'Por favor, preencha todos os campos.' });
        }

        const createdProduct = await productModel.createProduct({ 
            name, 
            description, 
            price, 
            image,
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
        const { id } = req.params;
        const { name, description, price, image, stock_quantity } = req.body;

        // Verificar se todos os campos estão presentes
        if (!name || !description || !price || !image || !stock_quantity) {
            return res.status(400).json({ error: 'Por favor, preencha todos os campos.' });
        }

        const updatedProduct = await productModel.updateProduct(id, { 
            name, 
            description, 
            price, 
            image,
            stock_quantity 
        });
        return res.status(200).json(updatedProduct);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Failed to update product' });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        await productModel.deleteProduct(id);
        return res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Failed to delete product' });
    }
};

const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await productModel.getProductById(id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        return res.status(200).json(product);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Failed to fetch product' });
    }
};

const decreaseStock = async (req, res) => {
    try {
        const { id } = req.params;
        const { quantity } = req.body;

        if (!quantity || quantity <= 0) {
            return res.status(400).json({ error: 'Quantidade inválida' });
        }

        const success = await productModel.decreaseStock(id, quantity);
        if (!success) {
            return res.status(400).json({ error: 'Estoque insuficiente' });
        }

        return res.status(200).json({ message: 'Estoque atualizado com sucesso' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro ao atualizar estoque' });
    }
};

module.exports = {
    getAll,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductById,
    decreaseStock
};