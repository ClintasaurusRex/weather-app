// Mock weather data for a weather website
export interface WeatherData {
  id: number;
  city: string;
  temperature: number;
  condition: string;
  high: number;
  low: number;
  feelsLike: number;
  humidity: number | null;
  windSpeed: number | null;
  icon: string;
  date: string;
}

export const mockWeatherData: WeatherData[] = [
  {
    id: 1,
    city: "Vancouver",
    temperature: 14,
    condition: "Partly cloudy",
    high: 16,
    low: 10,
    feelsLike: 13,
    humidity: null, // No data available
    windSpeed: null, // No data available
    icon: "partly_cloudy",
    date: "2025-05-08T18:00:00Z", // 6pm UTC
  },
  {
    id: 2,
    city: "Vancouver",
    temperature: 14,
    condition: "Cloudy with sunny breaks",
    high: 15,
    low: 9,
    feelsLike: 12,
    humidity: null, // No data available
    windSpeed: null, // No data available
    icon: "cloud",
    date: "2025-05-08T17:00:00Z", // 5pm UTC
  },
  {
    id: 3,
    city: "Vancouver",
    temperature: 15,
    condition: "A mix of sun and clouds",
    high: 17,
    low: 11,
    feelsLike: 14,
    humidity: null, // No data available
    windSpeed: null, // No data available
    icon: "partly_cloudy",
    date: "2025-05-08T16:00:00Z", // 4pm UTC
  },
  {
    id: 4,
    city: "Vancouver",
    temperature: 15,
    condition: "A mix of sun and clouds",
    high: 16,
    low: 12,
    feelsLike: 15,
    humidity: null, // No data available
    windSpeed: null, // No data available
    icon: "partly_cloudy",
    date: "2025-05-08T15:00:00Z", // 3pm UTC
  },
];
