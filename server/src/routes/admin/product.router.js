const express = require('express');
const router = express.Router();
const { addProduct} = require('../../controllers/product.controler');

router.post('/', addProduct);

module.exports = router;