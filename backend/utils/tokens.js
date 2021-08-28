const jwt = require("jsonwebtoken");

const createToken = (user, type)=> {
    //sign() creates a token containing all the data you need in the front-end
    const token = jwt.sign({id: user.id}, "" + process.env.SECRET);
    return token;
};

// const verifyToken 

module.exports = {createToken}