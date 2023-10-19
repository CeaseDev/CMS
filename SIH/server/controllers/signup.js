const express = require("express");
const router = express.Router();

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