import { useState, useEffect } from "react";

const cities = [
  { name: "New York", timezone: "America/New_York" },
  { name: "London", timezone: "Europe/London" },
  { name: "Tokyo", timezone: "Asia/Tokyo" },
  { name: "Sydney", timezone: "Australia/Sydney" },
  { name: "Mumbai", timezone: "Asia/Kolkata" },
];

export default function CitySelector({ onCitySelect }) {
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("selectedCities");
    if (saved) {
      setSelected(JSON.parse(saved));
      onCitySelect(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("selectedCities", JSON.stringify(selected));
  }, [selected]);

  const toggleCity = (city) => {
    const exists = selected.find(c => c.name === city.name);
    const updated = exists
      ? selected.filter(c => c.name !== city.name)
      : [...selected, city];

    setSelected(updated);
    onCitySelect(updated);
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Select Cities:</h2>
      <div className="flex flex-wrap gap-4">
        {cities.map(city => (
          <button
            key={city.name}
            onClick={() => toggleCity(city)}
            className={`px-4 py-2 rounded-lg border ${
              selected.find(c => c.name === city.name)
                ? "bg-blue-500 text-white"
                : "bg-white text-black dark:bg-gray-800 dark:text-white"
            }`}
          >
            {city.name}
          </button>
        ))}
      </div>
    </div>
  );
}
