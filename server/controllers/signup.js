const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const CryptoJS = require('crypto-js');

const user = require('../models/user');
router.post('/user', async (req, res, next) => {

    const createAttorneys = new user({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.query.password, 'key').toString(),
        phone: req.body.phone
    })

    try {
        const saved = await createAttorneys.save();
        console.log(saved);
        res.status(200).json(saved);
    }
    catch (e) {
        console.log(e)
        res.status(500).json(e);
    }
})

const attorneys = require('../models/attorneys');
router.post('/attorney', async (req, res, next) => {

    const createAttorneys = new attorneys({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.query.password, 'key').toString(),
        phone: req.body.phone
    })

    try {
        const saved = await createAttorneys.save();
        console.log(saved);
        res.status(200).json(saved);
    }
    catch (e) {
        console.log(e)
        res.status(500).json(e);
    }
})


const judege = require('../models/judge');
router.post('/judge', async (req, res, next) => {

    const createJudege = new judege({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.query.password, 'key').toString(),
        phone: req.body.phone
    })

    try {
        const saved = await createJudege.save();
        console.log(saved);
        res.status(200).json(saved);
    }
    catch (e) {
        console.log(e)
        res.status(500).json(e);
    }
})

module.exports = router;




const mongoose = require("mongoose");

const User = require("../models/user.js");


router.post('/',async (req,res,next)=>{
    console.log(req.body.name);

    const createUser = new User({
        name : req.body.name,
        // password : req.body.password
        
    })

})

module.exports = router;
