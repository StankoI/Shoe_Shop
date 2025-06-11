const jwt = require('jsonwebtoken');
require('dotenv').config()

function verifyJWT(req, res, next) {
    const authHeader = req.headers['authorization'];

    if (!authHeader?.startsWith('Bearer ')) {
        return res.sendStatus(401);
    }
    // console.log(authHeader)

    const token = authHeader.split(' ')[1];

    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) => {
            if (err) {
                return res.sendStatus(403)
            }
            req.email = decoded.UserInfo.email;
            req.role = decoded.UserInfo.role;
            next();
        }
    )
} 

module.exports = {verifyJWT};