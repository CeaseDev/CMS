const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
dotenv.config();

const mongoose = require("mongoose");


const secretKey = process.env.SECRET_KEY;
const User = require("../models/user.js");

exports.signup = async (req, res) => {
    const user = req.body;
    const Uid = user.uid;
    let session;

    try {
        session = await mongoose.startSession();
        session.startTransaction();

        const existingUser = await User.findOne({ Uid });

        if (existingUser) {
            console.log(existingUser);
            res.status(401).json({ message: "User Already exists" });
        }

        else {
            console.log(user);
            const password = user.password;

            const salt = 10;
            const hashPass = await bcrypt.hash(password, salt);

            const newUser = new User({
                UID: Uid,
                fname: user.fname,
                lname: user.lname,
                email: user.email,
                mobile: user.mobile,
                password: hashPass
            });

            await newUser.save();

            const token = jwt.sign({ uid: newUser.UID }, secretKey, {
                expiresIn: '1h',
            });

            console.log(token);

            return res.status(201).json({ message: "user registration successful", token });
        }

        await session.commitTransaction();
        session.end();
    }
    catch (err) {
        console.log(err);
        if (session) {
            await session.abortTransaction();
            session.endSession();
        }
        res.status(500).json({ message: "error occoured while signing up" });
    }

}