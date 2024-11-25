const Usuario = require('../models/userModel');
const bcrypt = require('bcrypt');

// Função de login
const login = async (req, res) => {
    console.log('Corpo da requisição:', req.body); // Log do corpo da requisição
    const { email, senha, password } = req.body;
    const userPassword = senha || password; // Aceita tanto 'senha' quanto 'password'
    console.log('Dados recebidos:', { email, userPassword }); // Log dos dados recebidos

    if (!email || !userPassword) {
        console.log('Email ou senha não fornecidos'); // Log de email ou senha ausentes
        return res.status(400).json({ message: 'Email e senha são obrigatórios' });
    }

    try {
        const usuario = await Usuario.findOne(email);
        if (usuario) {
            const isPasswordValid = await bcrypt.compare(userPassword, usuario.password);
            if (isPasswordValid) {
                console.log('Usuário encontrado:', usuario); // Log do usuário encontrado
                req.session.user = usuario; // Salva o usuário na sessão
                res.status(200).json(usuario);
            } else {
                console.log('Credenciais inválidas'); // Log de credenciais inválidas
                res.status(401).json({ message: 'Credenciais inválidas' });
            }
        } else {
            console.log('Usuário não encontrado'); // Log de usuário não encontrado
            res.status(401).json({ message: 'Credenciais inválidas' });
        }
    } catch (error) {
        console.error('Erro no servidor:', error); // Log do erro no servidor
        res.status(500).json({ message: 'Erro no servidor' });
    }
};

// Função de registro
const register = async (req, res) => {
    const { email, username, password } = req.body;

    if (!email || !username || !password) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
    }

    try {
        // Verifique se o usuário já existe
        const existingUser = await Usuario.findOne(email);
        if (existingUser) {
            return res.status(400).json({ message: 'Usuário já existe' });
        }

        // Criptografe a senha
        const hashedPassword = await bcrypt.hash(password, 10);

        // Crie um novo usuário
        const newUser = await Usuario.createUser(email, username, hashedPassword);

        res.status(200).json({ message: 'Usuário registrado com sucesso' });
    } catch (error) {
        console.error('Erro no servidor:', error);
        res.status(500).json({ message: 'Erro no servidor' });
    }
};

module.exports = {
    login,
    register
};