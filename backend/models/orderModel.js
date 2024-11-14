// models/order.js

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
  const [orders] = await db.promise().query(
    'SELECT * FROM orders WHERE user_id = ?',
    [userId]
  );
  return orders;
};

// Função para obter detalhes de um pedido específico
const getOrderDetails = async (orderId) => {
  const [order] = await db.promise().query(
    'SELECT * FROM orders WHERE id = ?',
    [orderId]
  );

  const [orderItems] = await db.promise().query(
    'SELECT * FROM order_items WHERE order_id = ?',
    [orderId]
  );

  return { order: order[0], items: orderItems };
};

const updateOrder = async (orderId, items) => {
  // Calcula o novo total do pedido
  const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Atualiza o valor total do pedido na tabela `orders`
  await db.promise().query(
    'UPDATE orders SET total_amount = ?, updated_at = NOW() WHERE id = ?',
    [totalAmount, orderId]
  );

  // Atualiza cada item no pedido
  await db.promise().query(
    'DELETE FROM order_items WHERE order_id = ?',
    [orderId]
  );

  // Reinsere os itens atualizados
  const updateItemsPromises = items.map((item) => {
    return db.promise().query(
      'INSERT INTO order_items (order_id, product_id, quantity, price) VALUES (?, ?, ?, ?)',
      [orderId, item.product_id, item.quantity, item.price]
    );
  });

  await Promise.all(updateItemsPromises);

  return { orderId, totalAmount };
};

const deleteOrder = async (orderId) => {
  await db.promise().query('DELETE FROM orders WHERE id = ?', [orderId]);
}


module.exports = {
  createOrder,
  getOrdersByUser,
  getOrderDetails,
  updateOrder, 
  deleteOrder
};
