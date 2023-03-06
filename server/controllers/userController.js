const express = require("express");
const userCtrl = express();
const User = require('../models/user');


// GET :: Get User Details
userCtrl.get('/:id', async(req, res)=>{
    const user = await User.findOne({uId: req.params.id});
    if (user) {
        user.password = "**Encrypted Password**";
        user.accessType = "**Can't View as User**"
        res.status(200).send(user);
    } else {
        res.status(202).send({"alert": "Didn't find any user."});
    }
})


module.exports = userCtrl;