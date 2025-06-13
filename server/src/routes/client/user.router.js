const express = require('express');
const {createUser} = require('../../controllers/user.controler')
const router = express.Router();

router.post('/', createUser);

module.exports = router;