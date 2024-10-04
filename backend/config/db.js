
console.log("DB Config Loaded")

const mysql = require("mysql2/promise");
require("dotenv").config();

const connection = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
});

// Função para testar a conexão
const testConnection = async () => {
    try {
        const conn = await connection.getConnection();
        console.log('Conexão de teste ao banco de dados estabelecida com sucesso.');
        await conn.release(); // Libera a conexão após o teste
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados de teste:', error);
    }
};

// Chame a função de teste
testConnection();

module.exports = connection;
