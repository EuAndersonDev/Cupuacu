const validateProductData = (req, res, next) => {
    console.log(req.body);
        console.log("Entrou no middleware"); // Adicione este log
        const { name, description, price, stock_quantity } = req.body;
    
        if (!name || !description || !price || !stock_quantity) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
        }
    
        if (typeof price !== 'number' || price <= 0) {
            return res.status(400).json({ error: 'O preço deve ser um número positivo.' });
        }
    
        if (!Number.isInteger(stock_quantity) || stock_quantity < 0) {
            return res.status(400).json({ error: 'A quantidade em estoque deve ser um número inteiro não negativo.' });
        }
    
        console.log("Validação passou, indo para o controlador."); // Adicione este log
        next();
    };
    
    module.exports = { validateProductData };
    