const express = require('express');
const { getCategory } = require('../../controllers/category.controler');
const router = express.Router();

router.get('/', getCategory);

module.exports = router;
