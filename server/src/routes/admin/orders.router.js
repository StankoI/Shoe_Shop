const express = require('express');
const { getAllOrders } = require('../../controllers/orders.controler');
const router = express.Router();

router.get('/', getAllOrders);

module.exports = router;