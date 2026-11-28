const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send("<h1>OhmStore</h1><p>Welcome dear buyer.</p>");
});
app.listen(PORT, () => {
  console.log("Shop at http://localhost:" + PORT);
});
