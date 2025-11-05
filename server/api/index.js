const express = require("express");
const app = express();

app.get("/api/weather", (req, res) => {
  res.json({ forecast: "Sunny and 25°C" });
});

module.exports = app; // ✅ required for Vercel
