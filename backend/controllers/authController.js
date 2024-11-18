const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const { JWT_SECRET } = process.env;


const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Busca o usuário pelo email
        const user = await User.findEmailNameAndPassword(email);
        if (!user) {
            return res.status(400).json({ message: 'Credenciais inválidas.' });
        }

        // Verifica a senha
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Credenciais inválidas.' });
        }

        // Gera o token JWT
        const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ message: 'Login bem-sucedido!', token });
    } catch (error) {
        res.status(500).json({ message: 'Erro no servidor.', error });
    }
};

const logout = (req, res) => {
    // Simplesmente invalida o token no lado do cliente
    res.status(200).json({ message: 'Logout bem-sucedido!' });
};


module.exports = {
    login,
    logout,
};