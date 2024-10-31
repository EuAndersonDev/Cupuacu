const db = require('../config/db'); // Conexão com o banco de dados

// Função para adicionar um item ao carrinho
const addItemToCart = async (productId, userId, quantity) => {
  // Verifica se o item já existe no carrinho do usuário
  const [existingItem] = await db.promise().query(
    'SELECT * FROM cart_items WHERE product_id = ? AND user_id = ?',
    [productId, userId]
  );

  if (existingItem.length > 0) {
    // Se o item já existe, atualize a quantidade
    const newQuantity = existingItem[0].quantity + quantity;
    await db.promise().query(
      'UPDATE cart_items SET quantity = ? WHERE product_id = ? AND user_id = ?',
      [newQuantity, productId, userId]
    );
  } else {
    // Caso contrário, insira o novo item no carrinho
    await db.promise().query(
      'INSERT INTO cart_items (product_id, user_id, quantity) VALUES (?, ?, ?)',
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
    const [cartItems] = await db.promise().query(
        'SELECT * FROM cart_items WHERE user_id = ?',
        [userId]
    );
    return cartItems;
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
