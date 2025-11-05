import { useState, useEffect } from "react";
import axios from "axios";

export default function QuoteGenerator() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchQuote = async () => {
      setIsLoading(true);
      setError("");
      try {
        const res = await axios.get("http://localhost:3001/api/quote");
        setData(res.data);
      } catch (err) {
        setError("Could not fetch quote.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuote();
  }, []);

  if (isLoading) return <p>Loading quote...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!data) return null;

  return (
    <div>
      <h2>Quote Generator</h2>
      <blockquote>{data.quote}</blockquote>
    </div>
  );
}
