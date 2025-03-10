const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.header('authtoken');
    if (!token) {
        return res.status(401).send('Access Denied');
    }
    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        console.log("verified ===> "+verified);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).send('Invalid Token');
    }
};

module.exports = authMiddleware;