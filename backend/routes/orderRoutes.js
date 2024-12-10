const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');


router.post('/order', orderController.createOrder);
router.get('/user/:userId', orderController.getOrdersByUser);
router.get('/:orderId', orderController.getOrderDetails);
router.put('/orderUpdate/:orderId', orderController.updateOrder);
router.delete('/:orderId', orderController.deleteOrder);

module.exports = router;
