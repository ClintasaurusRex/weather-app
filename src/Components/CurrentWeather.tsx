import React from "react";
import { useWeatherData } from "../hooks/useWeatherData";
import type { WeatherData } from "../../mockData";

interface CurrentWeatherProps {
  latitude?: number;
  longitude?: number;
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ latitude = 52.52, longitude = 13.41 }) => {
  const { weatherData, loading, error } = useWeatherData(latitude, longitude);

  if (loading) return <div className="text-white">Loading weather data...</div>;
  if (error) return <div className="text-white">Error: {error.message}</div>;
  if (!weatherData) return <div className="text-white">No weather data available</div>;

  return (
    <section className="border-2 rounded-2xl bg-black/70 h-1/8 w-2/3">
      <h1 className="ml-2 mt-2 text-white text-bold">{weatherData.city}</h1>
      <div className="text-white flex flex-row justify-center items-center ml-2 mt-2">
        <span className="text-6xl flex flex-row mr-4">
          {Math.round(weatherData.temperature)}
          <p className="text-xl">°C</p>
        </span>
        <div className="flex flex-col mb-2">
          <span className="text-xl">{weatherData.condition}</span>
          <p className="text-xs">Feels Like {Math.round(weatherData.feelsLike)}°C</p>
          <div className="flex flex-row justify-around">
            <p className="text-xs">H: {Math.round(weatherData.high)}°C</p>
            <p className="text-xs">L: {Math.round(weatherData.low)}°C</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentWeather;
