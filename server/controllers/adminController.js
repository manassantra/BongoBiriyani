const express = require("express");
const adminCtrl = express();
const bcrypt = require('bcrypt');
const Admin = require('../models/admin');
const cryp = require('crypto');
require('dotenv').config({path: './config/dev.env'});




module.exports =adminCtrl;