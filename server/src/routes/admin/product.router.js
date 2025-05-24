const express = require('express');
const router = express.Router();
const { addProduct, addInStock} = require('../../controllers/product.controler');

router.post('/', addProduct);

router.post('/:id/in_stock', addInStock);

module.exports = router;