const mysql = require('mysql2/promise');
const db = require('../config/db');

// Função para criar um novo produto
const createProduct = async (name, description, price, stock_quantity) => {
  const connection = await db.getConnection();
  const dataUTC = new Date().toISOString().slice(0, 19).replace('T', ' ');
  const query = 'INSERT INTO products (name, description, price, stock_quantity, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?)';
  const [result] = await connection.execute(query, [name, description, price, stock_quantity, dataUTC, dataUTC]);
  return { id: result.insertId, name, description, price, stock_quantity, created_at: dataUTC, updated_at: dataUTC };
};

// Função para obter todos os produtos
const getAll = async () => {
  const connection = await db.getConnection();
  const query = 'SELECT * FROM products';
  const [rows] = await connection.execute(query);
  return rows;
};

// Função para obter um produto por ID
const getProductById = async (id) => {
  const connection = await db.getConnection();
  const query = 'SELECT * FROM products WHERE id = ?';
  const [rows] = await connection.execute(query, [id]);
  return rows[0];
};

// Função para atualizar um produto
const updateProduct = async (id, product) => {
  const connection = await db.getConnection();
  const query = 'UPDATE products SET name = ?, description = ?, price = ?, stock_quantity = ?, updated_at = ? WHERE id = ?';
  const dataUTC = new Date().toISOString().slice(0, 19).replace('T', ' ');
  const [result] = await connection.execute(query, [product.name, product.description, product.price, product.stock_quantity, dataUTC, id]);
  return result;
};

// Função para deletar um produto
const deleteProduct = async (id) => {
  const connection = await db.getConnection();
  const query = 'DELETE FROM products WHERE id = ?';
  const [result] = await connection.execute(query, [id]);
  return result;
};

module.exports = {
  createProduct,
  getAll,
  getProductById,
  updateProduct,
  deleteProduct
};