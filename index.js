const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send("<h1>OhmStore</h1><p>Welcome to our Dear Customer.</p>");
});
app.listen(PORT, () => {
  console.log("Shop at http://localhost:" + PORT);
});
