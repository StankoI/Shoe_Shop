const express = require('express');
const router = express.Router();
const {createInvoice, getAllInvoices, deleteInvoice} = require("../../controllers/invoice.controler")

router.post('/', createInvoice );

router.get('/', getAllInvoices)

router.delete('/:id', deleteInvoice)

module.exports = router;
