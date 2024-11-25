const mysql = require('mysql2/promise');
const db = require('../config/db');

// Função para criar um novo usuário
const createUser = async (email, username, password) => {
  const connection = await db.getConnection();
  const dataUTC = new Date().toISOString().slice(0, 19).replace('T', ' ');
  const query = 'INSERT INTO users (email, username, password, created_at, updated_at) VALUES (?, ?, ?, ?, ?)';
  const [result] = await connection.execute(query, [email, username, password, dataUTC, dataUTC]);
  return { id: result.insertId, email, username, password, created_at: dataUTC, updated_at: dataUTC };
};

// Função para encontrar um usuário por email
const findOne = async (email) => {
  const connection = await db.getConnection();
  const query = 'SELECT * FROM users WHERE email = ?';
  const [rows] = await connection.execute(query, [email]);
  return rows[0];
};

// Função para encontrar um usuário por email e senha
const findByEmailAndPassword = async (email, password) => {
  const connection = await db.getConnection();
  const query = 'SELECT * FROM users WHERE email = ? AND password = ? LIMIT 1';
  const [rows] = await connection.execute(query, [email, password]);
  return rows[0]; // Retorna o usuário encontrado ou undefined
};

module.exports = {
  createUser,
  findOne,
  findByEmailAndPassword
};