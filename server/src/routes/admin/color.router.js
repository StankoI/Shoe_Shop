const express = require('express');
const { AddColor, RemoveColor } = require('../../controllers/color.controler');
const router = express.Router();

router.post('/', AddColor);

router.delete('/:id', RemoveColor);

module.exports = router;