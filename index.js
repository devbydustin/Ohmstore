const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.use("/image", express.static(path.join(__dirname, "image")));

app.get("/", (req, res) => {
  res.send(`
    <h1>OhmStore</h1>
    <p>Welcome to our Dear Customer.</p>
    <h2>Products</h2>
    <div style="display:flex;flex-wrap:wrap;gap:16px">
      <article>
        <img src="/image/Arduino.jpg" alt="Arduino Uno" width="200" height="140" style="object-fit:contain">
        <h3>Arduino Uno</h3>
        <p>₱550</p>
      </article>
      <article>
        <img src="/image/esp32.jpg" alt="ESP32 DevKit" width="200" height="140" style="object-fit:contain">
        <h3>ESP32 DevKit</h3>
        <p>₱350</p>
      </article>
      <article>
        <img src="/image/rasberri.jpg" alt="Raspberry Pi 5" width="200" height="140" style="object-fit:contain">
        <h3>Raspberry Pi 5</h3>
        <p>₱10,000</p>
      </article>
    </div>
  `);
});
app.listen(PORT, () => {
  console.log("Shop at http://localhost:" + PORT);
});
