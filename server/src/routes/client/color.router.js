const express = require('express');
const { getColors } = require('../../controllers/color.controler');
const router = express.Router();

router.get('/', getColors);

module.exports = router;
