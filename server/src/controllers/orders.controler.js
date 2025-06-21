const Orders = require("../models/order")


async function getAllOrders(req, res) {
    try{
        const orders = await Orders.find()
        .select('name address phoneNumber totalPrice products').sort({ created_at: -1 })

        if(!orders){
            res.sendStatus(404);
        }

        res.status(200).json(orders)
    }
    catch(err){
        res.status(500).json({"message":err.message})
    }
}

module.exports = {getAllOrders};