const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const apiServer = require('./server/routes/base-api');
require('dotenv').config({path: './config/dev.env'});


// App Config
const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
const corsList = { 
   origin: "*"
};
app.use(cors(corsList));

// DB Config
mongoose
  .connect(process.env.DATABASE_URL)
  .then((x) => {
    console.log(
      `Connected to : MongoDB-${x.connections[0].name}`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err.reason);
});


// Base Route
app.use("/api", apiServer);


// Server PORT
const port = process.env.PORT;

app.listen(port, () => {
  console.log("App Server Listening on : http://localhost:" + port);
});


