const validateCreateProduct = (req, res, next) => {
    if (!req.body.name || !req.body.price || !req.body.stock_quantity || !req.body.description) {
        return res.status(400).json({ message: "Missing required field" });
    }
    next();
};

const validateUpdateProduct = (req, res, next) => {
    if (!req.body.name && !req.body.price && !req.body.stock_quantity && !req.body.description) {
        return res.status(400).json({ message: "Missing required field" });
    }
    next();
};

module.exports = {
    validateCreateProduct,
    validateUpdateProduct,
}