const path = require('path');
const connection = require(path.join(__dirname, '../config/db'));

const getAll = async () =>{
    const [products] = await connection.execute("SELECT * FROM products");
    return products;
}


const createProduct = async ({ name, description, price, stock_quantity }) => {
    const dataUTC = new Date(Date.now()).toUTCString();
    const query = "INSERT INTO products (name, description, price, stock_quantity, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?)";
    
    const [createdProduct] = await connection.execute(query, [name, description, price, stock_quantity, dataUTC, dataUTC]);
    return { 
        insertId: createdProduct.insertId, 
        name, 
        description, 
        price, 
        stock_quantity, 
        created_at: dataUTC, 
        updated_at: dataUTC 
    };
};


const updateProduct = async (id, product) =>{
    const {name, description, price, stock_quantity} = product;
    const dataUTC = new Date(Date.now()).toUTCString();
    const query = "UPDATE products SET name = ?, description = ?, price = ?, stock_quantity = ?, updated_at = ? WHERE id = ?";
    await connection.execute(query, [name, description, price, stock_quantity, dataUTC, id]);
    return {id, name, description, price, stock_quantity, updated_at: dataUTC};
};

const deleteProcuct = async (id, product) =>{
    const {name} = product;
    const query = "DELETE FROM products WHERE id = ?";
    await connection.execute(query, [id]); 
    return {id, name};
}

module.exports = {
    getAll,
    createProduct,
    updateProduct,
    deleteProcuct
};