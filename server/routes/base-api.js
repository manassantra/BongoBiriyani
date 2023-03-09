const express = require("express");
const baseApiRoute = express();
const authApi = require('../controllers/authController');
const userApi = require('../controllers/userController');
const adminApi = require('../controllers/adminController');
const productApi = require('../controllers/productController');
const jwtVerifyUser = require('../middleware/jwtVerifyUser');
const jwtVerifyAdmin = require('../middleware/jwtVerifyAdmin');


// api responce
baseApiRoute.use('/response', (req, res)=>{
    res.status(200)
    .send({
        'status': 'OK', 
        'status-code': 200, 
        'Alert': 'API Server Running Successfully !'
    });
});

baseApiRoute.use('/auth', authApi);
baseApiRoute.use('/admin', adminApi);
baseApiRoute.use('/user', jwtVerifyUser, userApi);
baseApiRoute.use('/product', jwtVerifyAdmin, productApi);



module.exports = baseApiRoute;