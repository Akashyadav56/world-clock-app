import { DateTime } from "luxon";

export default function TimeDifference({ cities }) {
  if (cities.length !== 2) return null;

  const [city1, city2] = cities;
  const now1 = DateTime.now().setZone(city1.timezone);
  const now2 = DateTime.now().setZone(city2.timezone);

  const diffInHours = now2.offset - now1.offset;
  const absDiff = Math.abs(diffInHours / 60);

  return (
    <div className="p-6 bg-white rounded-xl shadow-md text-center">
      <h2 className="text-2xl font-bold mb-4">Time Difference</h2>
      <p className="text-xl">
        {city1.name} and {city2.name} have a time difference of{" "}
        <span className="font-semibold">{absDiff} hours</span>.
      </p>
    </div>
  );
}
