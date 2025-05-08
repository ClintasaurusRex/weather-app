// Mock weather data for a weather website
export interface WeatherData {
  id: number;
  city: string;
  temperature: number; // Celsius
  condition: string;
  humidity: number | null; // Percentage or null if unavailable
  windSpeed: number | null; // km/h or null if unavailable
  icon: string; // Icon name or URL
  date: string; // ISO date string
}

export const mockWeatherData: WeatherData[] = [
  {
    id: 1,
    city: "Vancouver",
    temperature: 14,
    condition: "Partly cloudy",
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
    humidity: null, // No data available
    windSpeed: null, // No data available
    icon: "partly_cloudy",
    date: "2025-05-08T15:00:00Z", // 3pm UTC
  },
];
