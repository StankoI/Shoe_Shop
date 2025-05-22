const express = require('express');
const router = express.Router();
const { addProduct, getAllProducts, getProduct, deleteProduct, updateProduct} = require('../../controllers/product.controler');

router.post('/', addProduct);

router.get('/', getAllProducts);

router.get('/:id', getProduct);

router.delete('/:id', deleteProduct);

router.put('/:id', updateProduct);

module.exports = router;
