const express = require('express');
const { AddCategory } = require('../../controllers/category.controler');
const router = express.Router();

router.post('/', AddCategory);

module.exports = router;