import { useState } from "react";
import WeatherModule from "./components/WeatherModule";
import CurrencyConverter from "./components/CurrencyConverter";
import QuoteGenerator from "./components/QuoteGenerator";
import "./App.css";
export default function App() {
  const [activeTab, setActiveTab] = useState("Weather");

  return (
    <div className="info-container max-w-lg w-full bg-white shadow-xl rounded-2xl p-6 mt-6 text-center">
      <h1 className="main-heading text-3xl font-bold mb-4 text-blue-600">InfoHub</h1>

      {/* Tabs */}
      <div className="flex justify-around mb-10">
        {["Weather", "Currency", "Quote"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg transition-all duration-200 ${
              activeTab === tab
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Conditional Rendering */}
      <div className="mt-4 report-container">
        {activeTab === "Weather" && <WeatherModule />}
        {activeTab === "Currency" && <CurrencyConverter />}
        {activeTab === "Quote" && <QuoteGenerator />}
      </div>
    </div>
  );
}
