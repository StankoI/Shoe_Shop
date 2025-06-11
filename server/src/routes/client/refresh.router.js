const express = require('express');
const router = express.Router();
const {handleRefreshToken} = require('../../controllers/refreshToken.controler');

router.get('/', handleRefreshToken);

module.exports = router;
