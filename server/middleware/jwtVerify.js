const express = require("express");
const jwtVerify = express();
const jwt = require("jsonwebtoken");

const verifyUserToken = (req, res, next) => {
    if (!req.headers.authorization) {
      return res.status(401).send("Unauthorized request");
    }
    const token = req.headers["authorization"].split(" ")[1];
    if (!token) {
      return res.status(401).send("Access denied.");
    }
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded.user;
      next();
    } catch (err) {
      res.status(400).send("Invalid token.");
    }
  };

jwtVerify.use(verifyUserToken);

module.exports = jwtVerify;