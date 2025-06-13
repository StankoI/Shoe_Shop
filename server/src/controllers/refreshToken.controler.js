const User = require('../models/user')
const RefreshToken = require('../models/tokens')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config()

async function handleRefreshToken(req, res) {

    const cookies = req.cookies;

    if (!cookies?.jwt) {
        return res.sendStatus(401);
    }

    console.log(cookies.jwt);

    const refreshToken = cookies.jwt;
    const tokenDocs = await RefreshToken.find({});
    let matchingTokenDoc = null;

    for (const tokenDoc of tokenDocs) {
        const isMatch = await bcrypt.compare(refreshToken, tokenDoc.token);
        if (isMatch) {
            matchingTokenDoc = tokenDoc;
            break;
        }
    }

    if (!matchingTokenDoc) {
        return res.sendStatus(403);
    }

    const user = await User.findById(matchingTokenDoc.userId);

    if (!user) {
        return res.sendStatus(403);
    }

    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, decoded) => {
            if (err || user.email !== decoded.email) {
                return res.sendStatus(403);
            }

            const accessToken = jwt.sign(
                {
                    "UserInfo": {
                        "name": user.name,
                        "email": decoded.email,
                        "phoneNumber": user.phoneNumber,
                        "role": user.role
                    }
                },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: '30s' }
            );
            res.json({ accessToken })
        }
    )

}

module.exports = { handleRefreshToken };