const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));

app.get("/currenttime", function (req, res) {
  res.send("<h1>" + new Date().toISOString() + "</h1>");
});
app.get("/", function (req, res) {
  res.send(
    `<form action="/store-user" method="POST"><label for="nama">Your Name : </label><input id="nama" type="text" name="username"/> <button>Submit Here</button></form>`
  );
});

app.post("/store-user", function (req, res) {
  const userName = req.body.username;

  const filepath = path.join(__dirname, "data", "users.json");

  const fileData = fs.readFileSync(filepath);
  const existingUsers = JSON.parse(fileData);

  existingUsers.push(userName);

  fs.writeFileSync(filepath, JSON.stringify(existingUsers));
  res.send(`<h1>Berhasil Mengirim Data : ${userName}</h1>`);
});

app.listen(port);
