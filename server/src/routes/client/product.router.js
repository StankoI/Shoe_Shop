const express = require('express');
const router = express.Router();
const {getAllProducts} = require('../../controllers/product.controler');

router.get('/', getAllProducts);

module.exports = router;
