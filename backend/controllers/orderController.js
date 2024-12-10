// controllers/orderController.js

const orderModel = require("../models/orderModel");

// Controlador para criar um novo pedido
const createOrder = async (req, res) => {
  const { userId, items } = req.body;

  // Verificações de validação
  if (!userId || typeof userId !== "number") {
    return res
      .status(400)
      .json({ message: "userId é obrigatório e deve ser um número" });
  }

  if (!Array.isArray(items) || items.length === 0) {
    return res
      .status(400)
      .json({
        message: "items é obrigatório e deve ser um array não vazio",
      });
  }

  for (const item of items) {
    if (
      !item.product_id ||
      typeof item.product_id !== "number" ||
      !item.quantity ||
      typeof item.quantity !== "number" ||
      item.quantity <= 0 ||
      !item.unit_price ||
      typeof item.unit_price !== "number" ||
      item.unit_price <= 0
    ) {
      return res
        .status(400)
        .json({ message: "Todos os itens devem ter product_id, quantity e unit_price válidos" });
    }
  }

  const totalAmount = items.reduce(
    (sum, item) => sum + item.unit_price * item.quantity,
    0
  );

  try {
    const orderId = await orderModel.createOrder(
      userId,
      totalAmount,
      items
    );
    res.status(201).json({ message: "Pedido criado com sucesso", orderId });
  } catch (error) {
    console.error("Erro ao criar pedido:", error);
    res.status(500).json({ message: "Erro ao criar pedido" });
  }
};

// Controlador para obter todos os pedidos de um usuário específico
const getOrdersByUser = async (req, res) => {
  const { userId } = req.params;

  if (!userId || isNaN(userId)) {
    return res
      .status(400)
      .json({ message: "userId é obrigatório e deve ser um número" });
  }

  try {
    const orders = await orderModel.getOrdersByUser(Number(userId));
    res.status(200).json(orders);
  } catch (error) {
    console.error("Erro ao obter pedidos:", error);
    res.status(500).json({ message: "Erro ao obter pedidos" });
  }
};

// Controlador para obter os detalhes de um pedido específico
const getOrderDetails = async (req, res) => {
  const { orderId } = req.params;

  try {
    const orderDetails = await orderModel.getOrderDetails(orderId);
    res.status(200).json(orderDetails);
  } catch (error) {
    console.error("Erro ao obter detalhes do pedido:", error);
    res.status(500).json({ message: "Erro ao obter detalhes do pedido" });
  }
};

// Controlador para atualizar um pedido específico
const updateOrder = async (req, res) => {
  const { orderId } = req.params;
  const { items } = req.body; // Lista de itens atualizados

  if (!Array.isArray(items) || items.length === 0) {
    return res
      .status(400)
      .json({
        message: "items é obrigatório e deve ser um array não vazio",
      });
  }


  try {
    const updatedOrder = await orderModel.updateOrder(orderId, items);
    res.status(200).json({ message: "Pedido atualizado com sucesso", updatedOrder });
  } catch (error) {
    console.error("Erro ao atualizar pedido:", error);
    res.status(500).json({ message: "Erro ao atualizar pedido" });
  }
};

// Controlador para deletar um pedido específico
const deleteOrder = async (req, res) => {
  const { orderId } = req.params;

  try {
    await orderModel.deleteOrder(orderId);
    res.status(200).json({ message: "Pedido deletado com sucesso" });
  } catch (error) {
    console.error("Erro ao deletar pedido:", error);
    res.status(500).json({ message: "Erro ao deletar pedido" });
  }
};

module.exports = {
  createOrder,
  getOrdersByUser,
  getOrderDetails,
  updateOrder,
  deleteOrder,
};
