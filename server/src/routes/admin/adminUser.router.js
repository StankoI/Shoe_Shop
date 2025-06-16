const express = require('express');
const { handleAdminLogin } = require('../../controllers/authAdmin.controler');
const router = express.Router();

router.post('/', handleAdminLogin);

module.exports = router;
