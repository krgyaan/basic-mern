const jwt = require('jsonwebtoken');
const User = require('../models/userSchema');

const Authenticate = async (req, res, next) => {
    try {
        const token = req.cookies.JWTtoken;
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

        const userCheck = await User.findOne({ _id: verifyToken._id, "tokens.token": token });

        if (!userCheck) { throw new Error("User not found 👁") };   

        req.token = token;
        req.user = userCheck;
        req.userID = userCheck._id;

        next();
    } catch (error) {
        res.status(401).send("Unauthorised: Token not matched");
        console.log(error);
    }
}

module.exports = Authenticate;
