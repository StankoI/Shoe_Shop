const express = require('express');
const router = express.Router();
const {handleLogout} = require('../../controllers/logout.contoler');

router.get('/', handleLogout);

module.exports = router;
