const express = require("express");
const productCtrl = express();
const Product = require('../models/product');
const ProductCategory = require('../models/productCategory');
const ProductSubcategory = require('../models/productSubcategory');


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

// GET :: Get Category List
productCtrl.get('/categorylist', async(req, res)=>{
    let categoryList = await ProductCategory.find();
    if(categoryList.length > 0) {
        res.status(200).send(categoryList);
    } else {
        res.status(202).send({"alert": "No Data Available"});
    }
});

// GET :: Get SubCategory List
productCtrl.get('/subcategorylist', async(req, res)=>{
    let subCatList = await ProductSubcategory.find();
    if(subCatList.length > 0) {
        res.status(200).send(subCatList);
    } else {
        res.status(202).send({"alert": "No Data Available"});
    }
});


module.exports = productCtrl;