const express = require("express");
const path = require("path");
const port = process.env.PORT || 3000;

const app = express();

app.use("/", express.static(path.join(__dirname, "../client/dist")));

app.get("/EricLuuResume", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/images/EricLuuResume.pdf"));
});

app.get("/clothesy/1", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/images/clothesy1.png"));
});

app.get("/clothesy/2", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/images/clothesy2.png"));
});

app.get("/clothesy/3", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/images/clothesy3.png"));
});

app.get("/clothesyAPI/1", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/images/api1.png"));
});

app.get("/clothesyAPI/2", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/images/api2.png"));
});

app.get("/clothesyAPI/3", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/images/api3.png"));
});

app.get("/clothesyAPI/4", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/images/api4.png"));
});

app.get("/aeroly/1", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/images/aeroly1.png"));
});

app.get("/aeroly/2", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/images/aeroly2.png"));
});

app.get("/aeroly/3", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/images/aeroly3.png"));
});

app.get("/aeroly/4", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/images/aeroly4.png"));
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
