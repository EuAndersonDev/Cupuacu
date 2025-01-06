const db = require('../config/db'); // Conexão com o banco de dados

const addItemToCart = async (productId, userId, quantity) => {
    const [existingItem] = await db.query(
        "SELECT * FROM cart WHERE product_id = ? AND user_id = ?",
        [productId, userId]
    );

    if (existingItem.length > 0) {
        const newQuantity = existingItem[0].quantity + quantity;
        await db.query(
            "UPDATE cart SET quantity = ? WHERE product_id = ? AND user_id = ?",
            [newQuantity, productId, userId]
        );
    } else {
        await db.query(
            "INSERT INTO cart (product_id, user_id, quantity) VALUES (?, ?, ?)",
            [productId, userId, quantity]
        );
    }
}; 

const updateCartItem = async (cartItemId, quantity) => {
    const [existingItem] = await db.promise().query(
        'SELECT * FROM cart_items WHERE id = ?',
        [cartItemId]
        );
    if (existingItem.length > 0) {
        await db.promise().query(
            'UPDATE cart_items SET quantity = ? WHERE id = ?',
            [quantity, cartItemId]
        );
    }
};

const deleteCartItem = async (cartItemId) => {
    const [existingItem] = await db.promise().query(
        'SELECT * FROM cart_items WHERE id = ?',
        [cartItemId]
        );
    if (existingItem.length > 0) {
        await db.promise().query(
            'DELETE FROM cart_items WHERE id = ?',
            [cartItemId]
        );
    }
};

const getCartItems = async (userId) => {
    const [cart] = await db.query(
        "SELECT * FROM cart WHERE user_id = ?",
        [userId]
    );
    return cart;
};

const getCartItem = async (cartItemId) => {
    const [cartItem] = await db.promise().query(
        'SELECT * FROM cart_items WHERE id = ?',
        [cartItemId]
    );
    return cartItem;
};


module.exports = {
    addItemToCart,
    updateCartItem,
    deleteCartItem,
    getCartItems,
    getCartItem
};
