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



// {
//     username: 'akxel',
//     email: 'ceo@spacex.us',
//     phone: 999,
//     password: 'U2FsdGVkX18RlQWHZpr7dT5H7LekJIjxkNNZgSZO4zE=',   "1234"
//     _id: new ObjectId("6521be4cbd279c713505a907"),
//     createdAt: 2023 - 10-07T20: 23: 41.002Z,
//     updatedAt: 2023 - 10-07T20: 23: 41.002Z,
//     __v: 0
// }


//judge
// {
//     username: 'akxel',
//     email: 'ceo@spacex.us',
//     phone: 999,
//     password: 'U2FsdGVkX19jA9y7OGO2fF0t57GwKCQa9jfxGWYOcNE=',
//     _id: new ObjectId("6521c28b18309fa2db08dc87"),
//     createdAt: 2023 - 10-07T20: 41: 47.303Z,
//     updatedAt: 2023 - 10-07T20: 41: 47.303Z,
//     __v: 0
// }


//user
// {
//     username: 'akxel',
//     email: 'ceo@spacex.us',
//     phone: 999,
//     password: 'U2FsdGVkX1/PSg/sn7SXGnR74fT8VTo8JdLVNX2p/KU=',
//     _id: new ObjectId("6521c48b18a4551c5e811071"),
//     createdAt: 2023 - 10-07T20: 50: 19.663Z,
//     updatedAt: 2023 - 10-07T20: 50: 19.663Z,
//     __v: 0
// }