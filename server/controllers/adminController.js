const express = require("express");
const adminCtrl = express();
const Admin = require('../models/admin');


// GET/:Id  ::: Get Admin Details
adminCtrl.get("/:id", async(req, res)=>{
    let adm = await Admin.findOne({admId: req.params.id});
    if (adm) {
        res.status(200).send(adm);
    } else {
        res.status(209).send({"error": "Error !"})
    }
});


module.exports =adminCtrl;