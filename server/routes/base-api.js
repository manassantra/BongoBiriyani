const express = require("express");
const baseApiRoute = express();
const authApi = require('../controllers/authController');
const userApi = require('../controllers/userController');
const adminApi = require('../controllers/adminController');
const jwtVerifyUser = require('../middleware/jwtVerifyUser');


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
// baseApiRoute.use('/admin', adminApi);
baseApiRoute.use('/user', jwtVerifyUser, userApi);



module.exports = baseApiRoute;