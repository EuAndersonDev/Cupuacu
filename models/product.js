const connection = require ("/config/connection.js");

const getAll = async () =>{
    const [products] = await connection.execute("SELECT * FROM products");
    return products;
}

