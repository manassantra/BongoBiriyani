const express = require("express");
const baseApiRoute = express();
const authApi = require('../controllers/authController');
const userApi = require('../controllers/userController');
const jwtVerify = require('../middleware/jwtVerify');


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
baseApiRoute.use('/user', jwtVerify, userApi);



module.exports = baseApiRoute;