const express = require("express");
const productSettingsCtrl = express();
const cryp = require('crypto');
const ProductCategory = require('../models/productCategory');
const ProductSubcategory = require('../models/productSubcategory');


// POST :: Create Category
productSettingsCtrl.post('/category/create', async(req, res)=>{
    const cat = await ProductCategory.findOne({categoryName: req.body.categoryName});
    if (!cat) {
        let category = new ProductCategory({
            productCatId: "PCAT-"+cryp.randomBytes(4).toString("hex"),
            categoryName: req.body.categoryName,
            descriptions: req.body.descriptions,
            imgUrl: req.body.imgUrl,
            isActive: true
        });
        let response = category.save();
        if(response) {
            res.status(200).send({"message": "Product Category Created Successfully.", "data": category});
        } else res.status(209).send({"error": "Unexpected error occured ! Try again Later."});
    } else {
        res.status(209).send({"error": "Product Category already exist !"});
    }
});

// POST :: Create SubCategory
productSettingsCtrl.post('/subcategory/create', async(req, res)=>{
    const subcat = await ProductSubcategory.findOne({subCategoryName: req.body.subCategoryName});
    if (!subcat) {
        let subCategory = new ProductSubcategory({
            productSubcatId: "PSCAT-"+cryp.randomBytes(4).toString("hex"),
            subCategoryName: req.body.subCategoryName,
            descriptions: req.body.descriptions,
            imgUrl: req.body.imgUrl,
            isActive: true
        });
        const response = subCategory.save();
        if(response) {
            res.status(200).send({"message": "Product SubCategory Created Successfully.", "data": subCategory});
        } else res.status(209).send({"error": "Unexpected error occured ! Try again Later."});
    } else {
        res.status(209).send({"error": "Product SubCategory already exist !"});
    }
});


// GET :: Get Category List
productSettingsCtrl.get('/categorylist', async(req, res)=>{
    let categoryList = await ProductCategory.find();
    if(categoryList.length > 0) {
        res.status(200).send(categoryList);
    } else {
        res.status(202).send({"alert": "No Data Available"});
    }
});

// GET :: Get SubCategory List
productSettingsCtrl.get('/subcategorylist', async(req, res)=>{
    let subCatList = await ProductSubcategory.find();
    if(subCatList.length > 0) {
        res.status(200).send(subCatList);
    } else {
        res.status(202).send({"alert": "No Data Available"});
    }
});


module.exports = productSettingsCtrl;