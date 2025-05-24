const express = require('express');
const { AddColor } = require('../../controllers/color.controler');
const router = express.Router();

router.post('/', AddColor);

module.exports = router;