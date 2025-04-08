import { useEffect, useState } from "react";
import { DateTime } from "luxon";
import { motion } from "framer-motion";

export default function ClockDisplay({ cities }) {
  const [now, setNow] = useState(DateTime.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(DateTime.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
      {cities.map((city) => {
        const cityTime = now.setZone(city.timezone);

        return (
          <motion.div
            key={city.name}
            className="p-6 bg-white/30 dark:bg-white/10 backdrop-blur-md rounded-2xl shadow-md hover:shadow-blue-400/50 dark:hover:shadow-blue-600/50 transition-all duration-300 flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-bold mb-2 text-black dark:text-white">{city.name}</h3>
            <p className="text-4xl font-mono text-black dark:text-white">{cityTime.toFormat("HH:mm:ss")}</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">{cityTime.zoneName}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
