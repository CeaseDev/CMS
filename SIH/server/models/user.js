// To create Schema

const mongoose = require('mongoose');

const judgeSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },


},
    { timestamps: true }
);

module.exports = mongoose.model('User', judgeSchema);