const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

dotenv.config();

const mongoose = require("mongoose");
const secretKey = process.env.SECRET_KEY;

const verifyUserToken = function (req, res, next) {
    // const token = req.body.token;
    const token = req.headers.token.split(' ')[1];

    !token && req.status(498).json("add token in header");

    jwt.verify(token, secretKey, (err, succ) => {
        if (err) {
            res.status(401).json("erorr in token ");
        }
        next();
    })

}