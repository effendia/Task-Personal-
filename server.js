const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Haii");
});

app.get("/personal/:id", (req, res) => {
  const id = req.params.id;
  res.send("haii");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
