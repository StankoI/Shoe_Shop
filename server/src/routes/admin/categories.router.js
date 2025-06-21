const express = require('express');
const { AddCategory, RemoveCategory } = require('../../controllers/category.controler');
const router = express.Router();

router.post('/', AddCategory);

router.delete('/:id', RemoveCategory);

module.exports = router;