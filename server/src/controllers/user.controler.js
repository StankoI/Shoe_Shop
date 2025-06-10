const User = require('../models/user')
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
            password:hashedPassword
        })

        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }
    catch (err) {
        res.status(400).json({ error: err.message })
    }
}

module.exports = { createUser };