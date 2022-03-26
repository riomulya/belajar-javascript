//import express
const express = require("express");

//import mongoose
const mongoose = require("mongoose");

//import bodyParser
const bodyParser = require("body-parser");

//inisiasi express sebagai app
const app = express();

//setup body parser
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

//connect to mongoDB /konek ke mongoDb
mongoose.connect("mongodb://localhost:27017/resthub", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

//setting port 1000 dengan nama port
const port = 1000;

//import module api router dari file api routes
const apiRouter = require("./api-routes");

//setup default url di root
app.get("/", (req, res) => {
  res.json({
    Status: "Api Berjalan",
    message: "Selamat untuk anda",
    succes: "berhasil menginstall nodemon",
  });
});

//menggunakan api route ke url api
app.use("/api", apiRouter);

//launch app with info at console log
app.listen(port, () => {
  console.log(`server berjalan di port ${port}`);
});
