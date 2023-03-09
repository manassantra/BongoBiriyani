const express = require("express");
const jwtVerifyAdmin = express();
const jwt = require("jsonwebtoken");

const verifyAdminToken = async(req, res, next) => {
    if (!req.headers.authorization) {
      return res.status(401).send("Unauthorized Access");
    }
    const token = req.headers["authorization"].split(" ")[1];
    if (!token) {
      return res.status(401).send("Access denied.");
    }
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.admin = decoded.admin;
        next();
    } catch (err) {
      res.status(400).send("Invalid token.");
    }
  };

  jwtVerifyAdmin.use(verifyAdminToken);

module.exports = jwtVerifyAdmin;