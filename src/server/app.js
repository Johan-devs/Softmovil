const express = require("express");
const path = require("path");
const bodyparser = require("body-parser");
const app = express();
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/softmovil";

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname,"../webapp/public/")));


MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

app.get("/", (req, res) => {
   
});

app.listen(3000, () => {
  console.log("Server started");
});

module.exports = app;
