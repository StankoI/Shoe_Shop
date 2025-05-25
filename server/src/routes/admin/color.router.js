const express = require('express');
const { AddColor, getColors } = require('../../controllers/color.controler');
const router = express.Router();

router.post('/', AddColor);

module.exports = router;