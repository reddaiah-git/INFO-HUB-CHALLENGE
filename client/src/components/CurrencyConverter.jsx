import { useState, useEffect } from "react";
import axios from "axios";

export default function CurrencyConverter() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCurrency = async () => {
      setIsLoading(true);
      setError("");
      try {
        const res = await axios.get(
          "http://localhost:3001/api/currency?amount=100"
        );
        setData(res.data);
      } catch (err) {
        setError("Could not fetch currency data.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCurrency();
  }, []);

  if (isLoading) return <p>Loading currency...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!data) return null;

  return (
    <div>
      <h2>Currency Converter</h2>
      <p>100 INR = {data.usd} USD</p>
      <p>100 INR = {data.eur} EUR</p>
    </div>
  );
}
