const express = require('express');
const {createUser, getUserByEmail, updateUser, addOrder} = require('../../controllers/user.controler')
const router = express.Router();

router.post('/', createUser);

router.post('/email', getUserByEmail)

router.put('/:id', updateUser)

router.put('/email/order', addOrder)

module.exports = router;