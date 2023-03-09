const express = require("express");
const productCtrl = express();
const Product = require('../models/product');
const cryp = require('crypto');


// POST :: Create Product [Admin Access Only]
productCtrl.post('/create', async (req, res)=>{
    let product = new Product({
        pId: cryp.randomBytes(8).toString("hex"),
        productName: req.body.productName,
        productCat: req.body.productCat,
        productSubcat: req.body.productSubcat,
        descriptions: req.body.descriptions,
        imgUrl: req.body.imgUrl,
        price: req.body.price,
        inStock: true,
        isActive: true
    })
    try {
        let response = await product.save();
        res.status(200).send(response);
    } catch(err) {
        res.status(202).send({"error": err});
    }
});

// GET :: Get list of all product
productCtrl.get('/all', async(req, res)=>{
    let product = await Product.find();
    if(product.length == 0) {
        res.status(202).send({"error": "No Products Available !"});
    }else if(!product) {
        res.status(202).send({"error": "Error ! Try again later !"});
    } else {
        res.status(200).send(product);
    }
});


module.exports = productCtrl;