const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
  console.log(req.method, req.url);
  res.status(200).sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/about", (req, res) => {
  console.log(req.method, req.url);
  res.status(200).sendFile(path.join(__dirname, "views", "about.html"));
});

app.get("/contact", (req, res) => {
  console.log(req.method, req.url);
  res.status(200).sendFile(path.join(__dirname, "views", "contact.html"));
});

app.use((req, res) => {
  console.log(req.method, req.url);
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
