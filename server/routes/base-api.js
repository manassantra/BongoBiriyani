const express = require("express");
const baseApiRoute = express();
const authApi = require('../controllers/authController');
const userApi = require('../controllers/userController');
const adminApi = require('../controllers/adminController');
const productApi = require('../controllers/productController');
const productSettingsApi = require('../controllers/productSettingsController');
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

// [Common Auth]
baseApiRoute.use('/auth', authApi);

// [Admin Users]
baseApiRoute.use('/admin', jwtVerifyAdmin , adminApi);
baseApiRoute.use('/product', jwtVerifyAdmin, productApi);
baseApiRoute.use('/productsettings', jwtVerifyAdmin, productSettingsApi);

// [Client Users]
baseApiRoute.use('/user', jwtVerifyUser, userApi);




module.exports = baseApiRoute;