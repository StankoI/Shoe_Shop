const express = require('express');
const router = express.Router();
const {getAllProducts, getProduct, getProductPrice} = require('../../controllers/product.controler');

router.get('/', getAllProducts);

router.get('/:id', getProduct);

router.get('/:id/price', getProductPrice);


module.exports = router;
