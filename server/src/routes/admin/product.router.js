const express = require('express');
const router = express.Router();
const Product = require('../../models/product');

router.post('/', addProduct);

module.exports = router;
