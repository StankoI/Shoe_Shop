const express = require('express');
const router = express.Router();
const { addProduct, addInStock, deleteProduct, editProduct} = require('../../controllers/product.controler');

router.post('/', addProduct);

router.post('/:id/in_stock', addInStock);

router.put('/:id', editProduct);

router.delete('/:id', deleteProduct)


module.exports = router;