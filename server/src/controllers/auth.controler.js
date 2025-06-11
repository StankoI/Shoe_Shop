
const User = require('../models/user')
const RefreshToken = require('../models/tokens')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config()

async function handleLogin(req, res) {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ "message": "email and password are required" });
    }

    const foundedUser = await User.findOne({ email });

    if (!foundedUser) {
        return res.status(401).json({ "message": "UnAuthorized" })
    }

    // const match = await bcrypt.compare(password, foundedUser.password);

    match = password === foundedUser.password;

    if (match) {
        //create JWTs

        const accessToken = jwt.sign(
            {
                "UserInfo": {
                    "name": foundedUser.name,
                    "email": foundedUser.email,
                    "phoneNumber":foundedUser.phoneNumber,
                    "role":foundedUser.role
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '30s' }
        )

        const refreshToken = jwt.sign(
            { "email": foundedUser.email },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '1d' }
        )

        const hashedToken = await bcrypt.hash(refreshToken, 10);

        await RefreshToken.create({
            token: hashedToken,
            userId: foundedUser._id,
            expiresAt: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000)  // 1 den
        });

        res.cookie('jwt', refreshToken, { httpOnly: true, maxAge: 1 * 24 * 60 * 60 * 1000 })

        res.status(200).json({ accessToken })
    }
    else {
        res.status(401).json({ "message": "password does not match" })
    }

}

module.exports = { handleLogin };