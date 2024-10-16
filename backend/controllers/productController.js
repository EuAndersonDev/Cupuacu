const productModel = require("../models/productModel");

const getAll = async (req, res) => {
    try {
        const products = await productModel.getAll(); 
        return res.status(200).json(products);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Failed to retrieve products' });
    }
};

const createProduct = async (req, res) => {
    console.log(req.body);  
    console.log("entrou no controller")
    try {
        const { name, description, price, stock_quantity } = req.body;
        const dataUTC = new Date(Date.now()).toUTCString();
        const createdProduct = await productModel.createProduct({ 
            name, 
            description, 
            price, 
            stock_quantity, 
            created_at: dataUTC, 
            updated_at: dataUTC 
        });
        return res.status(201).json(createdProduct);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Failed to create product' });
    }
};

const updateProduct = async (req, res) => {
    const updatedProduct = await productModel.updateProduct(req.params.id, req.body);
    return res.status(200).json(updatedProduct);
}



module.exports = {
    getAll,
    createProduct,
    updateProduct,
}