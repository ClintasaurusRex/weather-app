import { useState, useEffect } from 'react';
import { fetchWeatherApi } from 'openmeteo';

export interface WeatherData {
  city: string;
  temperature: number;
  feelsLike: number;
  condition: string;
  high: number;
  low: number;
  time: Date;
}

export function useWeatherData(latitude = 52.52, longitude = 13.41): {
  weatherData: WeatherData | null;
  loading: boolean;
  error: Error | null;
} {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        
        const params = {
          latitude,
          longitude,
          current: "temperature_2m,apparent_temperature",
          daily: "temperature_2m_max,temperature_2m_min,weather_code",
          timezone: "auto"
        };
        
        const url = "https://api.open-meteo.com/v1/forecast";
        const responses = await fetchWeatherApi(url, params);
        const response = responses[0];
        
        const utcOffsetSeconds = response.utcOffsetSeconds();
        const current = response.current()!;
        const daily = response.daily()!;
        
        // Map WMO weather codes to conditions
        const weatherCodes: Record<number, string> = {
          0: 'Clear sky',
          1: 'Mainly clear',
          2: 'Partly cloudy',
          3: 'Overcast',
          45: 'Fog',
          48: 'Depositing rime fog',
          51: 'Light drizzle',
          53: 'Moderate drizzle',
          55: 'Dense drizzle',
          61: 'Slight rain',
          63: 'Moderate rain',
          65: 'Heavy rain',
          71: 'Slight snow fall',
          73: 'Moderate snow fall',
          75: 'Heavy snow fall',
          95: 'Thunderstorm'
        };
        
        const weatherCode = daily.variables(2)!.value(0);
        const condition = weatherCodes[weatherCode] || 'Unknown';
        
        setWeatherData({
          city: "Berlin", // You could use a geocoding API to get city name
          temperature: current.variables(0)!.value(),
          feelsLike: current.variables(1)!.value(),
          condition,
          high: daily.variables(0)!.value(0),
          low: daily.variables(1)!.value(0),
          time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000)
        });
        
        setError(null);
      } catch (err) {
        console.error("Error fetching weather data:", err);
        setError(err instanceof Error ? err : new Error('Unknown error'));
      } finally {
        setLoading(false);
      }
    }
    
    fetchData();
  }, [latitude, longitude]);
  
  return { weatherData, loading, error };
}
