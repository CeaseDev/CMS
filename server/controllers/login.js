const express = require("express");
const router = express.Router();

const cryptoJS = require('crypto-js');

const user = require("../models/user");
router.post('/user', async (req, res, next) => {
    const userdata = await user.findOne(req.body._id);

    //wrong User-id 
    !userdata && res.status(401).json("wrong id entered ");

    //decrypting password
    var bytes = cryptoJS.AES.decrypt(userdata.password, "key");
    var pass = bytes.toString(cryptoJS.enc.Utf8);

    //correcct password
    if (pass === req.body.password) {

        console.log(userdata);
        res.status(201).json(userdata);
    }

})


const mongoose = require("mongoose");

// router.get('/login',async (req,res,next)=>{
//     const name = await mongoose.findOne(req.body.name);
//     if(req.body.)
// })


module.exports = router;