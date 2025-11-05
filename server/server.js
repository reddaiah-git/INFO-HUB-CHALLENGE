require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = 3001;

app.use(cors());

// ---------- QUOTE API ----------
const quotes = [
  "Innovation is seeing what everybody has seen and thinking what nobody has thought. — Albert Szent-Györgyi",
  "The best way to predict the future is to create it. — Peter Drucker",
  "Move fast and break things. — Mark Zuckerberg",
];

app.get("/api/quote", (req, res) => {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  res.json({ quote: random });
});

// ---------- WEATHER API ----------
app.get("/api/weather", async (req, res) => {
  try {
    const city = "London";
    const apiKey = process.env.WEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await axios.get(url);
    const { name, main, weather } = response.data;

    res.json({
      city: name,
      temperature: main.temp,
      condition: weather[0].description,
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
});

// ---------- CURRENCY API ----------
app.get("/api/currency", async (req, res) => {
  try {
    const amount = parseFloat(req.query.amount) || 1;
    const url = `https://open.er-api.com/v6/latest/INR`;
    const response = await axios.get(url);
    const { USD, EUR } = response.data.rates;

    res.json({
      usd: (amount * USD).toFixed(2),
      eur: (amount * EUR).toFixed(2),
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch currency data" });
  }
});

// ---------- START SERVER ----------
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
