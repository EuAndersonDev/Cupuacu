const product = require("../models/tasksModel");

const getAll = async (req, res) => {
    const tasks = await productModel.getAll();
    return res.status(200).json(tasks);
}

const createProduct = async (req, res) => {
    const createdProduct = await productModel.createProduct(req.body); 
    return res.status(201).json(createdProduct);
}

const updateProduct = async (req, res) => {
    const updatedProduct = await productModel.updateProduct(req.params.id, req.body);
    return res.status(200).json(updatedProduct);
}

const deleteProduct = async (req, res) => {
    const deletedProduct = await productModel.deleteProduct(req.params.id, req.body);
    return res.status(200).json(deletedProduct);
}

module.exports = {
    getAll,
    createProduct,
    updateProduct,
    deleteProduct
}