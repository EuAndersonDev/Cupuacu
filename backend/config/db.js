const mysql = require("mysql2/promise");
require("dotenv").config();

const connection = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
});


const testConnection = async () => {
    try {
        const conn = await connection.getConnection();
        console.log('Conexão de teste ao banco de dados estabelecida com sucesso.');
        conn.release();
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error.message); // Melhor especificar a mensagem de erro
    }
};


testConnection()
    .then(() => console.log("DB Config Loaded"))
    .catch(err => console.error("Erro na configuração do banco:", err));

module.exports = connection;
