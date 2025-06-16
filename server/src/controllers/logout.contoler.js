const User = require('../models/user');
const RefreshToken = require('../models/tokens');
const bcrypt = require('bcrypt');
require('dotenv').config();

async function handleLogout(req, res) {
    const cookies = req.cookies;

    if (!cookies?.jwt) {
        return res.sendStatus(204); 
    }

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
        res.clearCookie('jwt', { httpOnly: true, sameSite: 'None'});
        return res.sendStatus(204);
    }

    await RefreshToken.findByIdAndDelete(matchingTokenDoc._id);

    res.clearCookie('jwt', { httpOnly: true, sameSite: 'None'});

    return res.sendStatus(204);
}

module.exports = { handleLogout };
