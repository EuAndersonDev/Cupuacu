const db = require('../config/db');

const findByEmailAndPassword = async (email, password) => {
  const query = 'SELECT * FROM users WHERE email = ? AND password = ? LIMIT 1';
  const [rows] = await db.execute(query, [email, password]);
  return rows[0]; // Retorna o usuário encontrado ou undefined
};

module.exports = {
    findByEmailAndPassword,
};