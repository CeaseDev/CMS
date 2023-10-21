const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
dotenv.config();

const mongoose = require("mongoose");
const secretKey = process.env.SECRET_KEY;
const User = require("../models/user.js");

exports.login = async (req, res) => {
  console.log(req.body.uid);
  const { email, phone, password } = req.body;

  try {
    // const user = await User.findOne({ $or: [{ email }, { phone }] });
    const user = await User.findOne({ UID: req.body.uid })

    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    const token = jwt.sign({ userId: user._id }, secretKey, {
      expiresIn: '1h',
    });

    return res.status(200).json({
      message: 'Login successful',
      // token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }

}