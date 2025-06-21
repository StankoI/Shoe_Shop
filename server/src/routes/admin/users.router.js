const express = require('express');
const { getAllUsers, updateUserPromAdmin, deleteUser } = require('../../controllers/user.controler');
const router = express.Router();

router.get('/', getAllUsers);

router.put('/:id', updateUserPromAdmin );

router.delete('/:id', deleteUser);

module.exports = router;