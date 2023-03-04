const express = require("express");
const authCtrl = express();
const bcrypt = require('bcrypt');
const User = require('../models/user');
const cryp = require('crypto');


// POST :: Create User
authCtrl.post('/create', async(req, res)=>{
    let user = await User.findOne({mob: req.body.mob});
    if (!user) {
        let passwordSalt = bcrypt.genSaltSync(10);
        let passwordHash = bcrypt.hashSync("B4c0/\/", passwordSalt);
        let usr = new User({
            uId: cryp.randomBytes(16).toString("hex"),
            fullName: req.body.fullName,
            email: req.body.email,
            mob: req.body.mob,
            dob: req.body.dob,
            gender: req.body.gender,
            password: passwordHash,
            isVerified: true
        });

        const result = await usr.save();
        if (!result) {
            res.status(202).send({"error": "There is an Error. \n Please try again !"});
        } else {
            res.status(200).send({"message": "User Created Successfully !", "data": result});
        }
    }
    else {
        res.status(200).send({"alert": "User already exist with this Mobile Number !"});
    }
})












module.exports = authCtrl;