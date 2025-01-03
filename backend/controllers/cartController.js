const cartModel = require("../models/cartModel");

const addItemToCart = async (req, res) => {
    const { userId, productId, quantity } = req.body;

    try {
        await cartModel.addItemToCart(productId, userId, quantity);
        return res.status(201).json({ message: "Item added to cart" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

const updateCartItem = async (req, res) => {
    const { userId, productId, quantity } = req.body;

    try {
        await cartModel.updateCartItem(productId, userId, quantity);
        return res.status(200).json({ message: "Item updated" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

const deleteCartItem = async (req, res) => {
    const { userId, productId } = req.body;

    try {
        await cartModel.deleteCartItem(productId, userId);
        return res.status(200).json({ message: "Item deleted" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

const getCartItems = async (req, res) => {
    const { userId } = req.body;

    try {
        const cartItems = await cartModel.getCartItems(userId);
        return res.status(200).json(cartItems);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

const getCartItem = async (req, res) => {
    const { userId, productId } = req.body;

    try {
        const cartItem = await cartModel.getCartItem(productId, userId);
        return res.status(200).json(cartItem);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = {
    addItemToCart,
    updateCartItem,
    deleteCartItem,
    getCartItems,
    getCartItem,
};
