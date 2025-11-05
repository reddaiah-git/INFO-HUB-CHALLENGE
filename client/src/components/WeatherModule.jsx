import { useState, useEffect } from "react";
import axios from "axios";

export default function WeatherModule() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWeather = async () => {
      setIsLoading(true);
      setError("");
      try {
        const res = await axios.get("http://localhost:3001/api/weather");
        setData(res.data);
      } catch (err) {
        setError("Could not fetch weather data.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (isLoading) return <p>Loading weather...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!data) return null;

  return (
    <div>
      <h2>Weather</h2>
      <p>{data.city}</p>
      <p>{data.temperature} °C</p>
      <p>{data.condition}</p>
    </div>
  );
}
