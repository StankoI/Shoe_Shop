
const User = require('../models/user')
const RefreshToken = require('../models/tokens')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config()

async function handleLogin(req, res) {
    const { email, password, checked } = req.body;
    if (!email || !password) {
        return res.status(400).json({ "message": "email and password are required" });
    }

    console.log(email)
    console.log(password)


    const foundedUser = await User.findOne({ email:email });

    if (!foundedUser) {
        return res.status(401).json({ "message": "UnAuthorized" })
    }

    const match = await bcrypt.compare(password, foundedUser.password);

    // match = password === foundedUser.password;

    console.log("jjj")

    if (match) {
        //create JWTs

        const accessToken = jwt.sign(
            {
                "UserInfo": {
                    "name": foundedUser.name,
                    "email": foundedUser.email,
                    "phoneNumber": foundedUser.phoneNumber,
                    "role": foundedUser.role
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '10m' }
        )

        const refreshToken = jwt.sign(
            { "email": foundedUser.email },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: checked ? '30d' : '1d' }
        )

        const hashedToken = await bcrypt.hash(refreshToken, 10);

        await RefreshToken.create({
            token: hashedToken,
            userId: foundedUser._id,
            expiresAt: new Date(Date.now() + (checked ? 30 * 24 * 60 * 60 * 1000 : 1 * 24 * 60 * 60 * 1000))
        });

        res.cookie('jwt',
            refreshToken,
            {
                httpOnly: true,
                sameSite: 'None',
                maxAge: (checked ? 30 * 24 * 60 * 60 * 1000 : 24 * 60 * 60 * 1000)
            })

        res.status(200).json({
            accessToken,
            user: {
                name: foundedUser.name,
                email: foundedUser.email,
                phoneNumber: foundedUser.phoneNumber,
                role: foundedUser.role,
                address:foundedUser.address
            }
        })
    }
    else {
        res.status(401).json({ "message": "password does not match" })
    }

}

module.exports = { handleLogin };