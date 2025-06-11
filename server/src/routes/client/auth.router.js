const express = require('express');
const { handleLogin } = require('../../controllers/auth.controler');
const router = express.Router();

router.get('/', handleLogin);

module.exports = router;
