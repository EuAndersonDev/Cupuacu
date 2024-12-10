// models/orderModel.js

const db = require('../config/db'); // Conexão com o banco de dados

// Função para criar um novo pedido
const createOrder = async (userId, totalPrice, items) => {
  try {
    const itemsJson = JSON.stringify(items);
    const query = 'CALL create_order(?, ?, ?)';
    await db.execute(query, [userId, totalPrice, itemsJson]);
  } catch (error) {
    console.error('Erro ao criar pedido:', error);
    throw error;
  }
};

// Função para obter todos os pedidos de um usuário
const getOrdersByUser = async (userId) => {
  const [orders] = await db.query(
    'SELECT * FROM orders WHERE user_id = ?',
    [userId]
  );
  return orders;
};

// Função para obter detalhes de um pedido específico
const getOrderDetails = async (orderId) => {
  const [order] = await db.query(
    'SELECT * FROM orders WHERE id = ?',
    [orderId]
  );

  const [orderItems] = await db.query(
    'SELECT * FROM order_items WHERE order_id = ?',
    [orderId]
  );

  return { order: order[0], items: orderItems };
};

const updateOrder = async (orderId, items) => {
    try {
        const itemsJson = JSON.stringify(items);
        const query = "CALL update_order(?, ?)";
        await db.execute(query, [orderId, itemsJson]);
        return { orderId, items };
    } catch (error) {
        console.error("Erro ao atualizar pedido:", error);
        throw error;
    }
};

const deleteOrder = async (orderId) => {
  await db.query('DELETE FROM orders WHERE id = ?', [orderId]);
};

module.exports = {
  createOrder,
  getOrdersByUser,
  getOrderDetails,
  updateOrder, 
  deleteOrder
};