// Imports
const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use("/test", (req, res) => {
  res.json({ status: "API is Working" });
  console.log("API is Working");
});

app.listen(3000, () => {
  console.log("Server Listening at PORT 3000");
});
