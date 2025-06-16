const express = require('express');
const {createUser, getUserByEmail, updateUser, addOrder, getAllOrders, getIdByEmail} = require('../../controllers/user.controler')
const router = express.Router();

router.post('/', createUser);

router.post('/email', getUserByEmail)

router.put('/:id', updateUser)

router.put('/email/order', addOrder)

router.get('/orders/:id', getAllOrders);

router.get("/email/:email", getIdByEmail)

module.exports = router;