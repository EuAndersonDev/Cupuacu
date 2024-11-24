const Usuario = require('../models/auth');

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
        const usuario = await Usuario.findByEmailAndPassword(email, userPassword);
        if (usuario) {
            console.log('Usuário encontrado:', usuario); // Log do usuário encontrado
            req.session.user = usuario; // Salva o usuário na sessão
            res.status(200).json(usuario);
        } else {
            console.log('Credenciais inválidas'); // Log de credenciais inválidas
            res.status(401).json({ message: 'Credenciais inválidas' });
        }
    } catch (error) {
        console.error('Erro no servidor:', error); // Log do erro no servidor
        res.status(500).json({ message: 'Erro no servidor' });
    }
};


module.exports = {
    login,
};
