const express = require('express');
const { getAllUsers, updateUserPromAdmin } = require('../../controllers/user.controler');
const router = express.Router();

router.get('/', getAllUsers);

router.put('/:id', updateUserPromAdmin );


module.exports = router;