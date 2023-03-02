const express = require("express");
const baseApiRoute = express();


// api responce
baseApiRoute.use('/response', (req, res)=>{
    res.status(200)
    .send({
        'status': 'OK', 
        'status-code': 200, 
        'Alert': 'API Server Running Successfully !'
    });
});








module.exports = baseApiRoute;