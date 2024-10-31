const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

router.post('/cart', cartController.addItemToCart);
router.put('/cart', cartController.updateCartItem);
router.delete('/cart', cartController.deleteCartItem);
router.get('/cart', cartController.getCartItems);
router.get('/cart/:id', cartController.getCartItem);


module.exports = router;
