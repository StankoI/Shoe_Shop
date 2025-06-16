const express = require('express');
const router = express.Router();
const Order = require("../../models/order")

router.post("/", async (req, res) => {

    try{
        const{
            products,
            name,
            address,
            phoneNumber,
            totalPrice
        } = req.body;

        const newOrder = new Order({
            products,
            name,
            address,
            phoneNumber,
            totalPrice
        })

        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    }
    catch(err)
    {
        res.status(400).json({error: err.message})   
    }

})

module.exports = router;