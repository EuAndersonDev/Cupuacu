const path = require('path');
const connection = require(path.join(__dirname, '../config/db'));

const getAll = async () => {
    const [products] = await connection.execute("SELECT * FROM products");
    return products;
};

const getProductById = async (id) => {
    const query = "SELECT * FROM products WHERE id = ?";
    const [products] = await connection.execute(query, [id]);
    return products[0];
};

const createProduct = async ({ name, description, price, image, stock_quantity }) => {
    const dataUTC = new Date().toISOString().slice(0, 19).replace('T', ' '); // Formata a data corretamente
    const query = `
        INSERT INTO products (name, description, price, image, stock_quantity, created_at, updated_at) 
        VALUES (?, ?, ?, ?, ?, ?, ?)`;
    const [{ insertId }] = await connection.execute(query, [name, description, price, image, stock_quantity, dataUTC, dataUTC]);
    return { 
        insertId, 
        name, 
        description, 
        price, 
        image,
        stock_quantity, 
        created_at: dataUTC, 
        updated_at: dataUTC 
    };
};

const updateProduct = async (id, product) => {
    const { name, description, price, image, stock_quantity } = product;
    const dataUTC = new Date().toISOString().slice(0, 19).replace('T', ' '); 
    const query = `
        UPDATE products 
        SET name = ?, description = ?, price= ?, image = ?, stock_quantity = ?, updated_at = ?
        WHERE id = ?
    `;
    await connection.execute(query, [name, description, price, image, stock_quantity, dataUTC, id]);
    return { id, name, description, price, image, stock_quantity, updated_at: dataUTC };
};

const deleteProduct = async (id) => {
    const query = "DELETE FROM products WHERE id = ?";
    const [result] = await connection.execute(query, [id]); 
    return result; 
};

const decreaseStock = async (id, quantity) => {
    const query = `
        UPDATE products 
        SET stock_quantity = stock_quantity - ? 
        WHERE id = ? AND stock_quantity >= ?
    `;
    const [result] = await connection.execute(query, [quantity, id, quantity]);
    return result.affectedRows > 0; // Retorna true se a quantidade foi atualizada, false caso contrário
};

module.exports = {
    getAll,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductById,
    decreaseStock
};