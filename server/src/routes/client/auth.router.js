const express = require('express');
const { handleLogin } = require('../../controllers/auth.controler');
const router = express.Router();

router.post('/', handleLogin);

module.exports = router;
