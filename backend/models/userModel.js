const path = require('path');
const connection = require(path.join(__dirname, '../config/db'));

const getAll = async () => {
    const [users] = await connection.execute("SELECT * FROM users");
    return users;
};

const getUserById = async (id) => {
    const query = "SELECT * FROM users WHERE id = ?"
    const [users] = await connection.execute(query, [id]);
    return users[0];
};

const getUserByEmail = async (email) => {
    const query = "SELECT * FROM users WHERE email = ?";
    const [users] = await connection.execute(query, [email]);
    return users[0];
};

const createUser = async ({ username, email, password }) => {
    const dataUTC = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const query = `INSERT INTO users (name, email, password, created_at, updated_at) VALUES (?, ?, ?, ?, ?)`;
    const [{ insertId }] = await connection.execute(query, [username, email, password, dataUTC, dataUTC]);
    return { insertId, username, email, password, created_at: dataUTC, updated_at: dataUTC };
};

const updateUser = async (id, user) => {
    const { username, email, password, role } = user;
    const dataUTC = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const query = `UPDATE users SET username = ?, email = ?, password = ?, role = ?, updated_at = ? WHERE id = ?`;
    await connection.execute(query, [username, email, password, role, dataUTC, id]);
    return { id, username, email, password, role, updated_at: dataUTC };
};

const deleteUser = async (id) => {
    const query = "DELETE FROM users WHERE id = ?";
    const [result] = await connection.execute(query, [id]);
    return result;
};


module.exports = {
    getAll,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    getUserByEmail,
};