const userModel = require('../models/userModel');

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.getUserByEmail(email);
        if (!user || user.password !== password) {
            return res.status(401).json({ message: 'Credenciais inválidas' });
        }
        if (!req.session) {
            req.session = {};
        }
        req.session.user = user; // Certifique-se de que req.session existe
        return res.status(200).json({ message: 'Login bem-sucedido' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro no servidor' });
    }
};

module.exports = {
    login,
};
