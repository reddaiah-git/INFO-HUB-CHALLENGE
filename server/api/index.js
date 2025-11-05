export default function handler(req, res) {
  res.status(200).json({ forecast: "Sunny and 25°C from Vercel!" });
}
