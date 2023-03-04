const express = require("express");
const baseApiRoute = express();
const authApi = require('../controllers/authController');


// api responce
baseApiRoute.use('/response', (req, res)=>{
    res.status(200)
    .send({
        'status': 'OK', 
        'status-code': 200, 
        'Alert': 'API Server Running Successfully !'
    });
});


baseApiRoute.use('/user', authApi);





module.exports = baseApiRoute;