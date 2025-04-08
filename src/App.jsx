import { useState } from "react";
import CitySelector from "./components/CitySelector";
import ClockDisplay from "./components/ClockDisplay";
import TimeDifference from "./components/TimeDifference";
import TimelineDisplay from "./components/TimelineDisplay";

function App() {
  const [selectedCities, setSelectedCities] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center p-8 transition-colors duration-500">
        
        {/* Toggle Switch */}
        <div className="flex justify-end w-full max-w-6xl mb-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="relative inline-flex items-center h-8 rounded-full w-16 transition-all bg-gray-300 dark:bg-gray-700"
          >
            <span
              className={`inline-block w-6 h-6 transform bg-white rounded-full transition-transform duration-300 ${
                darkMode ? "translate-x-8" : "translate-x-1"
              }`}
            />
          </button>
        </div>

        <h1 className="text-4xl font-bold mb-8 text-black dark:text-white">World Clock 🌎</h1>

        <CitySelector onCitySelect={setSelectedCities} />

        {selectedCities.length > 0 && (
          <>
            <ClockDisplay cities={selectedCities} />
            <TimeDifference cities={selectedCities} />
            <TimelineDisplay cities={selectedCities} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
