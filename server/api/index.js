import express from "express";
import serverless from "serverless-http";

const app = express();

app.get("/api/weather", (req, res) => {
  res.json({ forecast: "Sunny and 25°C" });
});

export const handler = serverless(app);
export default handler;
