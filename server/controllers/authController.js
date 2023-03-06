const express = require("express");
const authCtrl = express();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const Admin = require('../models/admin');
const cryp = require('crypto');
require('dotenv').config({path: './config/dev.env'});


// POST :: Create User
authCtrl.post('/register', async(req, res)=>{
    let user = await User.findOne({mob: req.body.mob});
    if (!user) {
        let passwordSalt = bcrypt.genSaltSync(10);
        let passwordHash = bcrypt.hashSync(req.body.password, passwordSalt);
        let usr = new User({
            uId: cryp.randomBytes(16).toString("hex"),
            fullName: req.body.fullName,
            email: req.body.email,
            mob: req.body.mob,
            dob: req.body.dob,
            accessType: "USER-RXX",
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
});

// POST :: Login
authCtrl.post('/login', async(req, res)=>{
    let user;
    if (isNaN(parseInt(req.body.username))) {
        // if email
        user = await User.findOne({email: req.body.username});
    } else if (!isNaN(parseInt(req.body.username))) {
        // if mobile
        user = await User.findOne({mob: req.body.username});
    }

    if(user) {
        let Pass = req.body.password; 
        let storedPass = user.password; 
        const passwordMatch = await bcrypt.compare(Pass, storedPass);
        // console.log(secret.configuration);
        if (passwordMatch) {
            const token = jwt.sign(
                { _id: user.uId },
                process.env.JWT_SECRET,
                { expiresIn: "1h" }
              );
              res.status(200).send({
                user: user.fullName,
                authToken: token,
                expiresIn: 12 * 60 * 60,
                auth: true,
                uId: user.uId
              });
        } else {
            res.status(409).send("Wrong Password !")
        }
    } else {
        res.status(409).send("Account doesn't exist !");
    }
});

// GET :: Generate OTP
authCtrl.get('/getOtp', async(req, res)=>{
    var digits = "0123456789";
    var otp_length = 4;
    let OTP = "";
        for (let i = 0; i < otp_length; i++) {
          OTP += digits[Math.floor(Math.random() * 10)];
        }
    await res.status(200).send({"message": "Your Bongobiriyani Login OTP : " + `${OTP}` + "; It's Valid 5 min Only."});
});

// POST :: Create Admin
authCtrl.post('/admin/signup', async(req, res)=>{
    let admin = await Admin.findOne({mob: req.body.mob});
    if (!admin) {
        let passwordSalt = bcrypt.genSaltSync(10);
        let passwordHash = bcrypt.hashSync(req.body.password, passwordSalt);
        let adm = new Admin({
            admId: cryp.randomBytes(16).toString("hex"),
            fullName: req.body.fullName,
            email: req.body.email,
            mob: req.body.mob,
            dob: req.body.dob,
            accessType: "ADM-RWM",
            govUid: req.body.govUid,
            gender: req.body.gender,
            password: passwordHash,
            isVerified: true
        });

        const result = await adm.save();
        if (!result) {
            res.status(202).send({"error": "There is an Error. \n Please try again !"});
        } else {
            res.status(200).send({"message": "Admin Created Successfully !", "data": result});
        }
    }
    else {
        res.status(200).send({"alert": "Admin already exist with this Mobile Number !"});
    }
});


module.exports = authCtrl;