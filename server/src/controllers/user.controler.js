const User = require('../models/user')
const Order = require('../models/order')
const bcrypt = require('bcryptjs')

async function createUser(req, res) {
    try {
        const {
            name,
            email,
            phoneNumber,
            password
        } = req.body;

        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({ error: 'Email already in use' });
        }

        const existingPhone = await User.findOne({ phoneNumber });
        if (existingPhone) {
            return res.status(400).json({ error: 'Phone number already in use' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            name,
            email,
            phoneNumber,
            password: hashedPassword
        })

        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }
    catch (err) {
        res.status(400).json({ error: err.message })
    }
}


async function getUserByEmail(req, res) {
    try {
        const { email } = req.body;

        const existingUser = await User.findOne({ email })
            .select('name email phoneNumber address');

        if (!existingUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ user: existingUser });

    } catch (err) {
        console.error('Error in getUserByEmail:', err);
        return res.status(500).json({ message: 'Server error' });
    }
}

async function updateUser(req, res) {
    try {
        const id = req.params.id;

        const {
            name,
            email,
            address,
            phoneNumber } = req.body;

        if (!name || !email || !phoneNumber) {
            return res.status(400).json({ message: "Missing required fields." });
        }

        const updatedUser = await User.findByIdAndUpdate(
            id,
            {
                name: name,
                email: email,
                address: address,
                phoneNumber: phoneNumber
            },
            { new: true, runValidators: true }
        ).select('-password');

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found." });
        }

        res.status(200).json(updatedUser);

    } catch (err) {
        console.error("Error updating user:", err);
        res.status(500).json({ message: "Internal server error." });
    }
}

async function addOrder(req, res) {
    try {
        const { email, order_id } = req.body;

        if (!email || !order_id) {
            return res.status(400).json({ message: "Missing email or order_id." });
        }

        const updUser = await User.findOneAndUpdate(
            { email },
            { $push: { orders_ids: order_id } },
            { new: true }
        );

        if (!updUser) {
            return res.sendStatus(404);
        }

        return res.status(201).json(updUser);
    } catch (err) {
        console.error("Error adding order:", err);
        return res.status(500).json({ message: "Internal server error." });
    }
}


async function getAllOrders(req, res) {
    try {
        const id = req.params.id;

        const user = await User.findById(id).select('orders_ids -_id');

        const orders = await Promise.all(
            user.orders_ids.map(async (orderId) => {
                return await Order.findById(orderId).select('name address phoneNumber totalPrice products')
            })
        );

        res.status(200).json(orders);
    }
    catch (err) {
        res.status(500).json({error:err.message});
    }

}

//     _id: string;
//     products: ProductItem[];
//     name: string;
//     address: string;
//     phoneNumber: string;
//     totalPrice: number;

async function getIdByEmail(req, res) {
    try{
        const email = req.params.email;
        userId = await User.findOne({email:email}).select('_id');
        res.status(200).json(userId);
    }
    catch(err){
        res.status(500).json({error:err.message})
    }
}

module.exports = { createUser, getUserByEmail, updateUser, addOrder, getAllOrders, getIdByEmail };